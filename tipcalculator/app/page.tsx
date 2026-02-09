"use client";

import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [tipTotal, setTipTotal] = useState<number>(0);
  const [billTotal, setBillTotal] = useState<number>(0);

  const calculateTip = () => {
    const tip = bill * 0.05; 
    setTipTotal(tip);
    setBillTotal(bill + tip);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-100 via-green-100 to-teal-200 p-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="mb-2 text-center text-4xl font-extrabold text-emerald-600">
          Tip Calculator
        </h1>
       

        <div className="mb-8">
          <label className="mb-3 block text-lg font-semibold text-gray-700">
            Bill Amount
          </label>
         <input
          type="number"
          className="border w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setBill(Number(e.target.value))}
          />

        </div>

        <div className="mb-10 text-center">
         
          <div className="inline-block rounded-full bg-emerald-500 px-10 py-4 text-xl font-bold text-white shadow-md">
            5%
          </div>
        </div>

        <button
          onClick={calculateTip}
          className="mb-10 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 py-4 text-2xl font-bold text-white shadow-lg transition hover:from-emerald-600 hover:to-green-600 active:scale-95"
        >
          Calculate
        </button>

        <div className="space-y-6">
          <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-5">
            <span className="text-lg font-semibold text-gray-700">
              Tip Total
            </span>
            <span className="text-2xl font-extrabold text-emerald-600">
              ฿ {tipTotal.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-emerald-100 p-6">
            <span className="text-xl font-semibold text-gray-700">
              Bill Total
            </span>
            <span className="text-3xl font-extrabold text-emerald-700">
              ฿ {billTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
