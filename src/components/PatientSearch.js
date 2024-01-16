"use client"
import { useState } from "react";

const PatientSearch = ({ tcNo, setTcNo, handleGetPatient}) => {
  const [tcErr, setTcErr] = useState(false);
  return (
    <div className="flex h-14 bg-slate-800 rounded-lg items-center ">
      <div className=" w-32 pl-2 ">TC No:</div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type here"
          className={`input  w-full max-w-xs ${tcErr ? 'input-error' : 'input-bordered'}`}
          value={tcNo}
          onChange={(e) => {
            let inputValue = e.target.value;
            // Check if the input value has exactly 11 characters
            if (e.target.value.length == 11) {
              setTcNo(inputValue);
              setTcErr(false)
            }else{
              setTcNo(inputValue);
              setTcErr(true);
            }
          }}
        />
        <button
          className="btn btn-outline btn-success"
          onClick={handleGetPatient}
        >
          Get Patient
        </button>
      </div>
    </div>
  );
};

export default PatientSearch;
