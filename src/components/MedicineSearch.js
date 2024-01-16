import { useState } from "react";

const MedicineSearch = ({ handleChange, handleSearchMedicine }) => {
  const [loading, setLoading] = useState(false);

  const handleSearchClick = async () => {
    setLoading(true);
    // Burada ilaç arama işlemini yapabilirsiniz, örneğin bir API çağrısı yapabilirsiniz.
    await handleSearchMedicine();
    setLoading(false);
  };

  return (
    <div className="flex items-center h-14 w-full">
      <div className="w-32 pl-2">Medicine</div>
      <div className="flex gap-2">
        <div className="flex-auto">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div className="flex-auto">
          <button className="btn" onClick={handleSearchClick} disabled={loading}>
            {loading && <span className="loading loading-spinner"></span>}
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineSearch;
