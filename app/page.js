import Calculator from "./components/calculator";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Calculator />
      <div className="">
        Designed and Coded by <br />
        <a>Tarik</a>
      </div>
    </div>
  );
}
