import Calculator from "./components/calculator";
export default function Home() {
  return (
    <div id="app">
      <Calculator />
      <div className="text-xl" style={{ fontFamily: "digital" }}>
        Designed and Coded by <br />
        Tarik
      </div>
    </div>
  );
}
