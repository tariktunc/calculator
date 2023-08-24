import Calculator from "./components/calculator";
export default function Home() {
  return (
    <div id="app">
      <Calculator />
      <div className="text-xl text-center" style={{ fontFamily: "digital" }}>
        Designed and Coded by <br />
        Tarik
      </div>
    </div>
  );
}
