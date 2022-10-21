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
        <div className="w-[80%] mx-auto px-4 py-6 space-y-6">
          {Data.map((item, index) => {
            return (
              <>
                <button
                  onClick={() => toggle(index)}
                  key={index}
                  className="flex flex-col justify-between items-start w-[100%] border-t-2 pt-6"
                >
                  <div className="w-[100%] flex justify-between items-center">
                    <h6 className="text-lg font-semibold">{item.question}</h6>
                    <span>
                      {clicked === index ? (
                        <FiChevronUp className="text-2xl text-slate-500" />
                      ) : (
                        <FiChevronDown className="text-2xl text-slate-500" />
                      )}
                    </span>
                  </div>
                  <div className="text-start">
                    {clicked === index ? (
                      <p className="text-slate-500 w-[90%]">{item.answer}</p>
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
