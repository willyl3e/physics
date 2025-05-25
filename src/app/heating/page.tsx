"use client";

import { useState } from "react";
import Link from "next/link";

function valueToColorRGB(value:number) {
  const clamped = Math.max(0, Math.min(150, value));
  const ratio = clamped / 150;

  const r = Math.round(255 * ratio);        
  const g = 0;
  const b = Math.round(255 * (1 - ratio));  

  return `rgb(${r}, ${g}, ${b})`;
}

export default function Page() {
  const [mass, setMass] = useState(50);
  const [temp, setTemp] = useState(20);

  function handleSimulation() {
    setMass(mass * (0.1056 * mass + 51.5) * (1 / 100));
    setTemp(temp * (0.09896 * mass + 341.8) * (1 / 100));
  }

  return (
    <>
      <div className="m-20 border-b-[1px] border-gray-300 mb-6 pb-2">
        <Link href="/" className=" inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#6b7280"
            className="inline mb-1"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>{" "}
          <span className="text-gray-500">Go back</span>
        </Link>
      </div>
      <div className="m-20 grid grid-cols-2">
        <div>
          {/* Slider Control */}
          <div className="mb-6">
            <label htmlFor="heightSlider" className="block mb-2">
              Mass of water: {mass}g
            </label>
            <input
              id="heightSlider"
              type="range"
              min="0"
              max="500"
              value={mass}
              onChange={(e) => setMass(Number(e.target.value))}
              className="w-72"
            />
          </div>

          <span className="">Temperature: {temp}° C</span>
          {temp !== 20 && (
            <div className="text-sm block text-gray-400 border-[1px] mt-2 w-80 leading-4 p-3">
              The temperature should be reset to 20° C due to the fact that our
              experimental results consider neither the effects of time and
              temperature nor the effects of mass and temperature at initial
              temperatures higher than room temperature.<br></br>
              <button
                className="mt-2 pt-1 pb-1 pl-2 pr-2 bg-blue-100 text-blue-500 border-[1px] border-blue-500"
                onClick={() => setTemp(20)}
              >
                Cool it down
              </button>
            </div>
          )}

          <button
            className="mt-6 pl-2 pr-2 pb-1 pt-1 bg-green-600 text-white mb-3 block"
            onClick={handleSimulation}
          >
            Simulate conditions after 10 minutes of heating
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#FFFFFF"
              className="inline mb-1 ml-1"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </button>
          <div className="mt-10"></div>
        </div>
        <div>
          {/* Container with dynamic height */}
          <div className="border-2 border-black w-72 pb-5 pr-5 pl-5 transition-all duration-300 h-[600px] flex flex-col justify-end">
            <div
              className="transition-all duration-300"
              style={{ height: `${mass}px`, 
            backgroundColor:`${valueToColorRGB(temp)}`}}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
