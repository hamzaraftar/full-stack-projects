import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="h-16  flex min-w-[342px] justify-between items-center  px-4">
      <div className="font-bold ">
        <Link href={"/"}>
          <Image src={"/paper.png"} alt="paper image" width={50} height={50} />
        </Link>
      </div>
      <ul className="flex justify-center items-center gap-4 font-semibold">
        <Link href={"/"}>
          <li className="hover:bg-slate-300 p-3 py-2  rounded-xl ">Home</li>
        </Link>
        <Link href={"/about"}>
          <li className="hover:bg-slate-300 p-3 py-2  rounded-xl ">About</li>
        </Link>
        <Link href={"/contact"}>
          <li className="hover:bg-slate-300 p-3 py-2  rounded-xl ">
            Contact Us
          </li>
        </Link>
      </ul>
    </nav>
  );
}
