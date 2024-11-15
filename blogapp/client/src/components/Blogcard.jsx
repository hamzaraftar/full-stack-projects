// import React from 'react'

export default function Blogcard({ blogData }) {
  return (
    <div className="bg-white shadow-md overflow-hidden rounded-xl">
      <div className="flex flex-col w-full ">
        <img src={blogData.image} alt="blog image" />
        <div className="p-5">
          <h2 className="mt-1 text-xl text-left">{blogData.title}</h2>
          <p className="text-sm text-left opacity-70 mt-6">
            {blogData.description}
          </p>
        </div>
      </div>
    </div>
  );
}
