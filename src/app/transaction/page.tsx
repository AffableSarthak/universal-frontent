"use client";
import { useState } from "react";

const TransactionHome = () => {
  const [Transactions, setTransactions] = useState(initTranctions);
  return (
    <>
      <div className="flex justify-center">
        <>
          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-green-600 font-mono font-semibold">
              ALL
            </button>
            <button className="px-4 py-2 bg-green-600 font-mono font-semibold">
              Credit
            </button>
            <button className="px-4 py-2 bg-green-600 font-mono font-semibold">
              Debit
            </button>
          </div>

          {/* LIST */}
          {Transactions.map((txn) => {
            <div key={txn.id}></div>;
          })}
        </>
      </div>
    </>
  );
};

export default TransactionHome;

const initTranctions: any[] = [
  {
    id: 42,
    date: "30-01-2019",
    txnType: "credit",
    amount: "$2000",
    location: {
      id: 6,
      address: "206, portline, brooks avenue",
      city: "NY",
      zipCode: 80358,
    },
  },
];
