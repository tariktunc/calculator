"use client";
import React, { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);
  const [tempValue, setTempValue] = useState(0);
  const [tempAction, setTempAction] = useState("");

  const buttonList = [
    {
      text: "AC",
      value: "AC",
      isnum: false,
    },
    {
      text: "/",
      value: "/",
      isnum: false,
    },
    {
      text: "X",
      value: "X",
      isnum: false,
    },
    {
      text: "7",
      value: "7",
      isnum: true,
    },
    {
      text: "8",
      value: "8",
      isnum: true,
    },
    {
      text: "9",
      value: "9",
      isnum: true,
    },
    {
      isnum: false,
      text: "-",
      value: "-",
    },
    {
      text: "4",
      value: "4",
      isnum: true,
    },
    {
      text: "5",
      value: "5",
      isnum: true,
    },
    {
      text: "6",
      value: "6",
      isnum: true,
    },
    {
      text: "+",
      value: "+",
      isnum: false,
    },
    {
      text: "1",
      value: "1",
      isnum: true,
    },
    {
      text: "2",
      value: "2",
      isnum: true,
    },
    {
      text: "3",
      value: "3",
      isnum: true,
    },

    {
      text: "0",
      value: "0",
      isnum: true,
    },
    {
      text: ".",
      value: ".",
      isnum: true,
    },
    {
      text: "=",
      value: "=",
      isnum: false,
    },
  ];

  const actions = (item) => {
    switch (item.value) {
      case "X":
        setTempAction("X");
        break;
    }
  };

  const clickedButton = (item) => {
    if (item.isnum === true) {
      setValue(value + item.value);
    } else {
      console.log(actions(item.value));
      setValue(0);
    }
  };

  return (
    <div className="p-2 bg-black w-[340px] relative  border-2 border-solid border-47476b">
      {/* Formula Screen */}
      <div
        className=" font text-sm text-orange-600 text-right align-text-top leading-5 break-words"
        style={{ fontFamily: "digital" }}>
        {tempValue}
      </div>

      {/* Output Screen */}
      <div
        className="outputScreen text-2xl text-white text-right leading-9"
        id="display"
        style={{ fontFamily: "digital" }}>
        {value}
      </div>

      {/* Buttons Screen */}
      {buttonList.map((item, index) => (
        <button
          onClick={() => {
            clickedButton(item);
          }}
          key={index}
          value={item.value}
          className={`button
          ${item.text === "AC" ? "jumbo " : ""} 
          ${item.text === "=" ? "vertical" : ""} 
          ${item.text === "0" ? "zero" : ""}`}>
          {item.text}
        </button>
      ))}
    </div>
  );
}
