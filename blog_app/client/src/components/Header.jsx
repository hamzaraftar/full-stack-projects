import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="mt-10 mx-10">
      <div className="mt-10 sm:flex items-center justify-between mx-10 hidden">
        <h1 className="text-center  text-zinc-700  text-xl font-serif md:text-2xl lg:text-3xl">
          <Link to={"/"}>Blogs</Link>
        </h1>
        <Link
          className=" bg-gradient-to-r from-sky-500 to-indigo-500 m-2 p-2 rounded-md text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600 text-lg"
          to={"/create-blog"}
        >
          Create Blog
        </Link>
      </div>
    </div>
  );
};

export default Header;
