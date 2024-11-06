import React from "react";

export default function Navbar() {
  return (
    <nav className=" bg-white w-[80vw]  absolute flex justify-between top-10 right-[10vh] rounded-full p-5">
      <ul className=" flex gap-10 item-center">
        <li>Templates</li>
        <li>Marketplace</li>
        <li>Discover</li>
        <li>Pricing</li>
        <li>Learn</li>
      </ul>
      <div className="flex gap-2 items-center ">
        <button className=" bg-slate-400 p-4 rounded-lg">Log in</button>
        <button className=" bg-slate-900 text-white  font-bold p-4 rounded-full">
          Sign up free
        </button>
      </div>
    </nav>
  );
}
