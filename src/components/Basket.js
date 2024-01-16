import React, { useState } from "react";

const Basket = () => {
  
  const [basket, setBasket] = useState([
    { id: 1, name: "Quality Control Specialist", price: 123.45 },
    // Diğer öğeleri buraya ekleyebilirsiniz.
  ]);

  const handleDeleteItem = (itemId) => {
    const updatedBasket = basket.filter((item) => item.id !== itemId);
    setBasket(updatedBasket);
  };

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr className="bg-base-200">
            <th>#</th>
            <th className="max-w-32 text-xs">Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item, index) => (
            <tr key={index}     className={`${
              index % 2 === 1 ? "bg-base-200" : ""
            }`}>
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
  );
};

export default Basket;
