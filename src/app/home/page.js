"use client";
import { useState } from "react";

function page() {
  const [tcNo, setTcNo] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleGetPatient = async () => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/84a30ab4-28a5-45dd-9af9-007cd3896192"
      );
      const data = await response.json();

      // Gelen veriyi konsola yazdır
      console.log("Response Data:", data);

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

  return (
    <main className="flex min-h-screen flex-row justify-center p-24 gap-2 ">
      <div className="xl:max-w-xl min-w-xl">
        <div className=" w-full mx-auto bg-gradient-to-r from-lime-800  to-lime-600 p-4 rounded-t-xl">
          PRESCRIPTION MANAGMENT SYSTEM
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex h-14 bg-slate-800 rounded-b-lg items-center ">
            <div className=" w-32 pl-2 ">Pharmacy</div>
            <div className="flex-auto">Faruk Eczanesi</div>
          </div>
          <div className="flex h-14 bg-slate-800 rounded-lg items-center ">
            <div className=" w-32 pl-2 ">TC No:</div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={tcNo}
                onChange={(e) => setTcNo(e.target.value)}
              />
              <button
                className="btn btn-outline btn-success"
                onClick={handleGetPatient}
              >
                Get Patient
              </button>
            </div>
          </div>
          <div className="flex h-14 bg-slate-800 rounded-lg items-center ">
            <div className=" w-32 pl-2 ">Fullname</div>
            <div className="flex-auto">
              {/* Bulunan kişiyi göster */}
              {selectedPerson && <pre>{selectedPerson.fullName}</pre>}
            </div>
          </div>
          <div className="flex flex-col bg-slate-800 rounded-lg ">
            <div className="flex items-center h-14 w-full">
              <div className=" w-32 pl-2 ">Medicine</div>
              <div className="flex-auto">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex flex-col bg-slate-800 rounded-lg gap-2 p-2 max-h-96 overflow-y-scroll">
              {/* one line medicine for search */}
              <div className="flex justify-between items-center bg-slate-700 p-2 rounded-lg">
                <div className="">Medicine Name</div>
                <button className="btn btn-outline btn-success">Add</button>
              </div>
              {/* one line medicine for search */}
              <div className="flex justify-between items-center bg-slate-700 p-2 rounded-lg">
                <div className="">Medicine Name</div>
                <button className="btn btn-outline btn-success">Add</button>
              </div>
              {/* one line medicine for search */}
              <div className="flex justify-between items-center bg-slate-700 p-2 rounded-lg">
                <div className="">Medicine Name</div>
                <button className="btn btn-outline btn-success">Add</button>
              </div>
              {/* one line medicine for search */}
              <div className="flex justify-between items-center bg-slate-700 p-2 rounded-lg">
                <div className="">Medicine Name</div>
                <button className="btn btn-outline btn-success">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Basket */}
      <div className="xl:max-w-xl xl:min-w-xl bg-slate-800 rounded-xl h-[500px] ">
        <div className="overflow-x-auto h-[450px]">
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
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td className=" max-w-32 text-xs ">
                  Quality Control Specialist
                </td>
                <td>123.45tl</td>
                <td>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Desktop Support Technician</td>
                <td>123.45tl</td>
                <td>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr className="bg-base-200">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>123.45tl</td>
                <td>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>4</th>
                <td className=" max-w-32 ">
                  Desktop Support Technician sadsa sad fdsdf sd f sd f sd f s
                  dsd dfddsfdsfsd fdvfvdvweas d asd s f sdf sd f sdg df rgdfgdf.
                  dfgdf
                </td>
                <td>123.45tl</td>
                <td>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr className="bg-base-200">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>123.45tl</td>
                <td>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>4</th>
                <td className=" max-w-32 ">
                  Desktop Support Technician sadsa sad fdsdf sd f sd f sd f s
                  dsd dfddsfdsfsd fdvfvdvweas d asd s f sdf sd f sdg df rgdfgdf.
                  dfgdf
                </td>
                <td>123.45tl</td>
                <td>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr className="bg-base-200">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>123.45tl</td>
                <td>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>4</th>
                <td className=" max-w-32 ">
                  Desktop Support Technician sadsa sad fdsdf sd f sd f sd f s
                  dsd dfddsfdsfsd fdvfvdvweas d asd s f sdf sd f sdg df rgdfgdf.
                  dfgdf
                </td>
                <td>123.45tl</td>
                <td>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr className="bg-base-200">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>123.45tl</td>
                <td>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>4</th>
                <td className=" max-w-32 ">
                  Desktop Support Technician sadsa sad fdsdf sd f sd f sd f s
                  dsd dfddsfdsfsd fdvfvdvweas d asd s f sdf sd f sdg df rgdfgdf.
                  dfgdf
                </td>
                <td>123.45tl</td>
                <td>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-slate-800 flex flex-row justify-between py-4 px-2 rounded-b-xl items-center">
          <div>
            Toplam:<span>345.66</span> tl
          </div>
          <button className="btn btn-success ">Save</button>
        </div>
      </div>
    </main>
  );
}

export default page;
