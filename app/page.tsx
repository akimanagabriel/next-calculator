"use client";

import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import React, { useRef, useState } from "react";

function page() {
  const buttons = [
    ["7", "8", "9", "C"],
    ["4", "5", "6", "/"],
    ["1", "2", "3", "*"],
    [".", "0", "-", "+"],
  ];

  const [resultField, setResultField] = useState("")

  const handleButtonsClick = (e: any) => {
    const value = e.target.innerText

    if (value === "C") {
      return setResultField("")
    }

    setResultField(prev => `${prev}${value}`)
  }

  function computeResult() {
    const result = eval(resultField)
    setResultField(result)
  }

  return (
    <div className="flex flex-col justify-between min-h-screen p-10">
      <h1 className="my-5 text-center text-2xl">Calculator Simulation</h1>

      {/* main contents */}

      <div className="flex justify-center items-center">
        <div className="bg-white w-[320px] p-4 shadow rounded">
          <div
            className="p-5 border text-end bg-gray-50 mb-4"
          >
            {resultField || 0}
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {buttons.map((buttonRow, index) => (
                <div className="flex gap-3" key={index}>
                  {buttonRow.map((value, idx) => (
                    <button onClick={handleButtonsClick} className="border h-12 w-12 bg-slate-50" key={idx}>
                      {value}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <button onClick={computeResult} className="border h-12 w-12 bg-slate-50 h-full bg-orange-500 text-white">
                =
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center">@codeleirbag </h1>
      </div>
    </div>
  );
}

export default page;
