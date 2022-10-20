import React from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { Data } from "./Data";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="w-[60%] mx-auto bg-white">
      <div className="min-h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold my-5">Frequerntly asked questions</h1>
        <div className="w-[70%] mx-auto px-4 py-6 border-t-2 space-y-2">
          {Data.map((item, index) => {
            return (
              <>
                <button  onClick={() => toggle(index)} key={index} className="flex flex-col justify-between items-start" >
                  <div className="w-[100%] flex justify-between items-center">
                    <h6 className="text-lg font-semibold">{item.question}</h6>
                    <span>
                      {clicked === index ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  </div>
                  <div className="text-start">
                    {clicked === index ? (
                      <p className="text-slate-500 duration-500">{item.answer}</p>
                    ) : null}
                  </div>
                </button>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
