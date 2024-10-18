function Createblog() {
  return (
    <div>
      <form className="flex flex-col m-5 min-w-[400px] mx-auto md:w-[600px] sm:w-[500px] ">
        <input
          type="text"
          placeholder="Enter title"
          required
          className="outline-none font-medium text-xl border-2 border-blue-500 rounded-md m-2 p-2"
        />
        <input
          type="text"
          placeholder="Enter description"
          required
          className="outline-none font-medium text-xl border-2 border-blue-500 rounded-md m-2 p-2"
        />
        <button className=" sm:w-[300px]  md:w-[400px] sm:mx-auto   bg-gradient-to-r from-sky-500 to-indigo-500 m-2 p-2 rounded-md text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600 text-lg ">
          Add
        </button>
      </form>
    </div>
  );
}

export default Createblog;
