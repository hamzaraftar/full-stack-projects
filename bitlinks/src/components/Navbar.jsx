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
        <Link href={"/"}>
          <li>About</li>
        </Link>
        <Link href={"/"}>
          <li>Shorten</li>
        </Link>
        <Link href={"/"}>
          <li>Contact US</li>
        </Link>
      </ul>
    </nav>
  );
}
