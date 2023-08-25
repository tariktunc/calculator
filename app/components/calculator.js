"use client";
import React, { useState } from "react";

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

export default function Home() {
  const [value, setValue] = useState(""); // Todo: Output Screen.  value
  const [formula, setFormula] = useState(""); // Todo: Formula Screen. formula
  const [tempValue, setTempValue] = useState(""); // Todo:
  const [tempAction, setTempAction] = useState(""); // Todo:  ` + / * - `

  // 1
  const clickedButton = (item) => {
    if (item.isnum === true) {
      setValue(value + item.value); // Çıktı Ekranına değer eklendi: value
      setFormula(formula + item.value); // Formül Ekranına değer eklendi: formula
    } else if (item.text === "AC") {
      setValue("");
      setFormula("");
      setTempValue("");
      setTempAction("");
    } else {
      if (
        formula !== "+" &&
        formula !== "-" &&
        formula !== "X" &&
        formula !== "/"
      ) {
        setFormula(formula + item.value); // ` + - * / ` Formül Ekranına eklendi
      }
      setTempValue(value); // ` + - * / ` tempValue eklendi
      setValue(""); // Çıktı Ekranını sıfırla: value
      actions(item);
    }
  };

  // 2
  const actions = (item) => {
    switch (item.value) {
      case "+":
      case "-":
      case "X":
      case "/":
        setTempAction(item.value); // ` + / * - `
        break;
      case "=":
        calculate();
        break;
      default:
        prompt("actions default error");
        break;
    }
  };

  // 3
  const calculate = () => {
    let result = "";
    if (value && tempValue && tempAction) {
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
          result = "error";
          break;
      }

      if (result !== "") {
        setFormula(value + tempAction + tempValue + "=" + result);
        setValue(result.toString());
      }

      // setTempValue("");
      // setTempAction("");
    }
  };

  return (
    <div className="p-2 bg-black w-[340px] relative  border-2 border-solid border-47476b">
      {/* Formula Screen tempValue */}
      <div
        className="h-8 text-2xl text-orange-600 text-right align-text-top leading-5 break-words"
        style={{ fontFamily: "digital" }}>
        <div className="max-w-5/6">{formula}</div>
      </div>

      {/* Output Screen  value */}
      <div
        className=" h-8 text-3xl text-white text-right align-text-top leading-5 break-words"
        id="display"
        style={{ fontFamily: "digital" }}>
        <div className="font max-w-5/6">{value}</div>
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
