// import React from 'react'

import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const menu = [
    { text: "Nature", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Technology", path: "/" },
    { text: "Politics", path: "/" },
  ];
  return (
    <div>
      {/* <header></header> */}
      <div className="border-b">
        <div className="container px-5 py-5 flex justify-between">
          <span className="font-extrabold text-2xl">BOLGGER</span>
          <div className="flex gap-4 items-center justify-center">
            <ul className="flex gap-4 items-center justify-center">
              {menu.map((x) => (
                <li key={x.path}>
                  <Link className="p-2">{x.text}</Link>
                </li>
              ))}
            </ul>
            <button className="bg-slate-500 text-white  px-2 py-1 rounded">
              <Link> + New Post</Link>
            </button>
          </div>
        </div>
      </div>
      {/* <body></body> */}
      <div className="flex mx-auto px-5  md:px-20 ">
        <div className="mt-5 mb-5 min-h-[500px] w-full">
          <Outlet></Outlet>
        </div>
      </div>
      {/* <footer></footer> */}
      <div className="bg-slate-800 flex">
        <div className="flex mx-auto px-20 py-20  items-center justify-center">
          <h3 className="text-gray-400">BLOGGER</h3>
        </div>
      </div>
    </div>
  );
}
