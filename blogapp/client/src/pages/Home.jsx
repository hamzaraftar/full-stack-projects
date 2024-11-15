import Blogcard from "../components/Blogcard";

// import React from 'react'
export default function Home() {
  const data = [
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/200/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/208/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/207/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/206/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/205/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/204/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/203/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/202/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/201/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
  ];
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((x) => (
          <Blogcard blogData={x} key={x.comments} />
        ))}
      </div>
    </div>
  );
}
