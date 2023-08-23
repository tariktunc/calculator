import React from "react";

export default function calculator() {
  return (
    <div className="p-2 bg-black w-[340px] relative  border-2 border-solid border-47476b">
      {/* Formula Screen */}

      <div
        className=" min-h-full font text-sm text-orange-600 text-right align-text-top leading-5 break-words"
        style={{ fontFamily: "digital" }}>
        666666666666666666666666666666666666666666666
      </div>
      {/* Output Screen */}

      <div
        className="outputScreen text-2xl text-white text-right leading-9"
        id="display"
        style={{ fontFamily: "digital" }}>
        00000000000000000000000000
      </div>

      {/* Buttons Screen */}
      <div>
        <button id="clear" value="AC" className="button jumbo">
          AC
        </button>
        <button id="divide" value="/" className="button">
          /
        </button>
        <button id="multiply" value="X" className="button">
          X
        </button>
        <button id="seven" value="7" className="button">
          7
        </button>
        <button id="eight" value="8" className="button">
          8
        </button>
        <button id="nine" value="9" className="button">
          9
        </button>
        <button id="subtract" value="-" className="button">
          -
        </button>
        <button id="four" value="4" className="button">
          4
        </button>
        <button id="five" value="5" className="button">
          5
        </button>
        <button id="six" value="6" className="button">
          6
        </button>
        <button id="add" value="+" className="button">
          +
        </button>
        <button id="one" value="1" className="button">
          1
        </button>
        <button id="two" value="2" className="button">
          2
        </button>
        <button id="three" value="3" className="button">
          3
        </button>
        <button id="zero" value="0" className="button jumbo">
          0
        </button>
        <button id="decimal" value="." className="button">
          .
        </button>
        <button
          id="equals"
          value="="
          className="button"
          style={{ position: "absolute", height: "130px", bottom: "8px" }}>
          =
        </button>
      </div>
    </div>
  );
}
