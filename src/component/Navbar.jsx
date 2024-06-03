import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import img from "../assets/img.png";

const Navbar = ({ setSearchTerm }) => {
  const [term, setTerm] = React.useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(term);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-2xl">
        <img src={img} alt="Logo" className="w-20" />
      </h1>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="p-2 rounded-l-lg text-black w-[30vw]"
        />
        <button type="submit" className="p-2 bg-blue-500 rounded-r-lg w-[10vw]">
          Search
        </button>
      </form>
      <div>
        {user ? (
          <button
            onClick={handleLogout}
            className="p-2 bg-red-500 rounded-lg w-[10vw]"
          >
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
