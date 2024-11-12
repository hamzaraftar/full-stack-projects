import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="h-16  flex min-w-[342px] justify-between items-center bg-slate-400 px-4">
      <div className="font-bold ">
        <Image src={"/paper.png"} alt="paper image" width={50} height={50} />
      </div>
      <ul className="flex justify-center items-center gap-4 font-semibold">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
}
