"use client";
import { useState } from "react";
import axios from 'axios';

import PatientSearch from "@/components/PatientSearch";
import MedicineSearch from "@/components/MedicineSearch";
import Basket from "@/components/Basket";

function page() {
  const [tcNo, setTcNo] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [responseMedicines, setResponseMedicines] = useState(null);

  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (medicine) => {
    // Kontrol etmek için önce basket içinde medicine'in bulunup bulunmadığını kontrol et
    const isMedicineInBasket = basket.some((item) => item.id === medicine.id);

    // Eğer medicine basket içinde yoksa ekleyin
    if (!isMedicineInBasket) {
      setBasket([...basket, medicine]);
    }
  };

  const handleDeleteItem = (itemId) => {
    const updatedBasket = basket.filter((item) => item.id !== itemId);
    setBasket(updatedBasket);
  };

  const handleGetPatient = async () => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/84a30ab4-28a5-45dd-9af9-007cd3896192"
      );
      const data = await response.json();

      // Gelen veriyi konsola yazdır
      // console.log("Response Data:", data);

      // State'i güncelle
      setResponseData(data);

      // TcNo'ya göre kişiyi bul
      const foundPerson = data.find((person) => person.tcKimlikNo === tcNo);

      // State'i güncelle
      setSelectedPerson(foundPerson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const handleSearchMedicine = async () => {
    try {
      // Sunucu tarafında saklanan abonelik anahtarı
      const subscriptionKey = '8e6b081556e842c99687d44c5ef5ebe3';
      const apiUrl = `https://prescriptionmanagementsystemresource.azure-api.net/medicine/Medicine/SearchByName?searchTerm=${searchTerm}`;
  
      const response = await axios.get(apiUrl, {
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
      });
  
      // Axios, HTTP durum kodunu otomatik olarak kontrol eder
      // Eğer durum kodu 2xx (başarılı) ise bu blok çalışır
      const data = response.data;
  
      // Log the response data to the console
      console.log("Response Medicines:", data);
  
      // Update the state
      setResponseMedicines(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  

  const handleChange = (event) => {
    // Update the state with the entered value
    setSearchTerm(event.target.value);
    console.log(`SearchTerm`, searchTerm);
    // Call the search function with the entered value
    // handleSearchMedicine(event.target.value);
  };

  const calculateTotalPrice = () => {
    let total = basket.reduce((total, item) => total + item.price, 0);
    return total.toFixed(2);
  };

  return (
    <main className="flex min-h-screen flex-row justify-center p-24 gap-2 ">
      <div className=" w-[600px] ">
        <div className=" w-full mx-auto bg-gradient-to-r from-lime-800  to-lime-600 p-4 rounded-t-xl">
          PRESCRIPTION MANAGMENT SYSTEM
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex h-14 bg-slate-800 rounded-b-lg items-center ">
            <div className=" w-32 pl-2 ">Pharmacy</div>
            <div className="flex-auto">Faruk Eczanesi</div>
          </div>
          {/* Patient Search */}
          <PatientSearch
            tcNo={tcNo}
            setTcNo={setTcNo}
            handleGetPatient={handleGetPatient}
          />
          <div className="flex h-14 bg-slate-800 rounded-lg items-center ">
            <div className=" w-32 pl-2 ">Fullname</div>
            <div className="flex-auto">
              {/* Bulunan kişiyi göster */}
              {selectedPerson && <pre>{selectedPerson.fullName}</pre>}
            </div>
          </div>
          <div className="flex flex-col bg-slate-800 rounded-lg ">
            {/* Medicine Search */}
            <MedicineSearch
              handleChange={handleChange}
              handleSearchMedicine={handleSearchMedicine}
            />
            <div className="flex flex-col bg-slate-800 rounded-lg gap-2 p-2 max-h-96 overflow-y-scroll">
              {responseMedicines &&
                responseMedicines.map((medicine, index) => (
                  // one line medicine for search
                  <div
                    key={index}
                    className="flex justify-between items-center bg-slate-700 p-2 rounded-lg"
                  >
                    <div className="">{medicine.name}</div>
                    <button
                      className="btn btn-outline btn-success"
                      onClick={() => handleAddToBasket(medicine)}
                    >
                      Add
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* Basket */}
      <div className="xl:max-w-xl xl:min-w-xl bg-slate-800 rounded-xl h-[500px] w-[400px] ">
        <div className="overflow-y-auto h-[450px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item, index) => (
                <tr
                  key={index}
                  className={`${index % 2 !== 1 ? "bg-base-200" : ""}`}
                >
                  <th>{index + 1}</th>
                  <td className="max-w-32 text-xs">{item.name}</td>
                  <td>{item.price}tl</td>
                  <td>
                    <button
                      className="btn btn-xs btn-outline btn-error"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-800 flex flex-row justify-between py-4 px-2 rounded-b-xl items-center">
          <div>
            Toplam:<span>{calculateTotalPrice()}</span> tl
          </div>
          <button className="btn btn-success ">Save</button>
        </div>
      </div>
    </main>
  );
}

export default page;
