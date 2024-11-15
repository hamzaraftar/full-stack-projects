import { Helmet } from "react-helmet";

export default function Blog() {
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>BLOGGER | Blog</title>
      </Helmet>
      <div className="flex flex-col w-[60%] mx-auto ">
        <h1 className="mt-1 text-3xl font-extrabold">
          Is it worth investing in real estate ? Advantages and disadvantages
        </h1>
        <div className="flex mt-4 mb-4">
          <small className="text-sm">Jan 20, 2024</small>
        </div>
        <img
          className="rounded-lg"
          src="https://picsum.photos/id/200/300/200"
          alt="img"
        />
        <div>
          <h2 className="text-2xl mt-2 mb-2">What is Lorem Ipsum?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2 className="text-2xl mt-2 mb-2">Why do we use it?</h2>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using Content here, content here, making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
    </div>
  );
}
