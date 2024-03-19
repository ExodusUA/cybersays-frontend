import React from "react";

function ButtonsSection({ selectedType, setSelectedType, handleSearch }) {
  const selected = `!border-blue-500 !bg-transparent !text-blue-500 !hover:bg-blue-500 !hover:text-white`;

  return (
    <div className="flex items-center justify-between">
      <div className="mb-4 flex items-center gap-2">
        <button
          onClick={(e) => setSelectedType("RoyalPag")}
          className={`rounded border-2 border-transparent bg-blue-500 px-4 py-2 font-bold text-white duration-300 hover:bg-blue-700 ${selectedType === "RoyalPag" && selected}`}
        >
          RoyalPag
        </button>
        <button
          onClick={(e) => setSelectedType("Xoxoday")}
          className={`rounded border-2 border-transparent bg-blue-500 px-4 py-2 font-bold text-white duration-300 hover:bg-blue-700 ${selectedType === "Xoxoday" && selected}`}
        >
          Xoxoday
        </button>
        <button onClick={(e) => setSelectedType("Visa")} className={`rounded border-2 border-transparent bg-blue-500 px-4 py-2 font-bold text-white duration-300 hover:bg-blue-700 ${selectedType === "Visa" && selected}`}>
          Visa
        </button>
        <button
          onClick={(e) => setSelectedType("Partner")}
          className={`rounded border-2 border-transparent bg-blue-500 px-4 py-2 font-bold text-white duration-300 hover:bg-blue-700 ${selectedType === "Partner" && selected}`}
        >
          Partner
        </button>
      </div>
      <div className="mb-4">
        <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="Search by email or id" className="saira w-full rounded border-2 border-blue-500 px-4 py-2 text-black/70" />
      </div>
    </div>
  );
}

export default ButtonsSection;
