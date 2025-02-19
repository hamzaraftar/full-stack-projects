import Header from "@/components/Header";
import Textbox from "@/components/Textbox";

export default function Home() {
  return (
    <div className="text-center mt-5 ">
      <h1 className="text-4xl ">React + Python</h1>
      <div>
        <Header />
        <Textbox />
      </div>
    </div>
  );
}
