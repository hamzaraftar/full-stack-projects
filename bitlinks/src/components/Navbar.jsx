import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="h-16 bg-purple-700 flex justify-between px-3 items-center text-white">
      <div className="font-bold text-lg">BitLinks</div>
      <ul className="flex justify-center items-center gap-4">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/generate"}>
          <li>Shorten</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact US</li>
        </Link>
        <li className="flex gap-4">
          <Link href={"/generate"}>
            <button className="bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold">
              Try Now
            </button>
          </Link>
          <Link href={"/github"}>
            <button className="bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
