import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

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
      <h1 className="text-2xl">Movie Search</h1>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="p-2 rounded-l-lg"
        />
        <button type="submit" className="p-2 bg-blue-500 rounded-r-lg">
          Search
        </button>
      </form>
      <div>
        {user ? (
          <button onClick={handleLogout} className="p-2 bg-red-500 rounded-lg">
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
