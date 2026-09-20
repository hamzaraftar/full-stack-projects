import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api";

function Navbar() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await api.get("api/users/me/");
        setName(response.data.username);
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };

    fetchName();
  }, []);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* Profile (left) */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg font-semibold text-white">
          {name.charAt(0).toUpperCase()}
          {}
        </div>
        <span className="font-medium text-gray-800">{name}</span>
      </div>

      <button
        onClick={handleLogOut}
        className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
