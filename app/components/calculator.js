"use client";
import React, { useState } from "react";

const buttonList = [
  {
    text: "AC",
    value: "AC",
    isnum: false, // Indicates if the button represents a number
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
    text: "+",
    value: "+",
    isnum: false,
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
    text: "-",
    value: "-",
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

// Main component for the calculator
export default function Home() {
  // State variables to keep track of different aspects of the calculator
  const [value, setValue] = useState(""); // Holds the current output value
  const [formula, setFormula] = useState(""); // Holds the formula being entered
  const [tempValue, setTempValue] = useState(""); // Holds temporary value during calculations
  const [tempAction, setTempAction] = useState(""); // Holds temporary action (+, -, *, /)

  // Function called when a calculator button is clicked
  const clickedButton = (item) => {
    if (item.isnum === true) {
      setValue(value + item.value); // Add number to the output screen
      setFormula(formula + item.value); // Add number to the formula screen
    } else if (item.text === "AC") {
      // Clear everything
      setValue("");
      setFormula("");
      setTempValue("");
      setTempAction("");
    } else {
      // Handle operators (+, -, *, /)
      if (
        formula !== "+" &&
        formula !== "-" &&
        formula !== "X" &&
        formula !== "/"
      ) {
        // Update formula, tempValue, and clear the output screen
        setFormula(formula + item.value);
        setTempValue(value);
        setValue("");
        actions(item);
      }
    }
  };

  // Function to handle actions (+, -, *, /)
  const actions = (item) => {
    switch (item.value) {
      case "+":
      case "-":
      case "X":
      case "/":
        setTempAction(item.value); // Store the action
        break;
      case "=":
        calculate(); // Perform the calculation when "=" is clicked
        break;
      default:
        console.error("actions default error");
        break;
    }
  };

  // Function to perform calculations
  const calculate = () => {
    let result = "";
    if (value && tempValue && tempAction) {
      // Calculate based on the stored action
      switch (tempAction) {
        case "+":
          result = parseFloat(tempValue) + parseFloat(value);
          break;
        case "-":
          result = parseFloat(tempValue) - parseFloat(value);
          break;
        case "X":
          result = parseFloat(tempValue) * parseFloat(value);
          break;
        case "/":
          result = parseFloat(tempValue) / parseFloat(value);
          break;
        default:
          result = "ERROR";
          break;
      }

      if (result !== "") {
        // Update the formula and output screen with the result
        setFormula(value + tempAction + tempValue + "=" + result);
        setValue(result.toString());
      } else {
        // Handle calculation error
        setValue("ERROR");
        setFormula("ERROR");
        setTempValue("ERROR");
        setTempAction("ERROR");
      }
    } else {
      // Handle calculation error
      setValue("ERROR");
      setFormula("ERROR");
      setTempValue("ERROR");
      setTempAction("ERROR");
    }
  };

  return (
    <div className="p-2 bg-black w-[340px] relative  border-2 border-solid border-47476b">
      {/* Formula Screen */}
      <div
        className="h-8 text-2xl text-orange-600 text-right align-text-top leading-5 break-words"
        style={{ fontFamily: "digital" }}>
        <div className="max-w-5/6">{formula}</div>
      </div>

      {/* Output Screen */}
      <div
        className=" h-8 text-3xl text-white text-right align-text-top leading-5 break-words"
        id="display"
        style={{ fontFamily: "digital" }}>
        <div className="font max-w-5/6">{value}</div>
      </div>

      {/* Buttons */}
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
