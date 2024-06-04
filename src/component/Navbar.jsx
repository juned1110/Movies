import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import img from "../assets/img.png";
import img1 from "../assets/search.png";

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
    <nav
      className="p-2 bg-zinc-900 sticky top-0  text-white flex justify-between items-center rounded-full mx-3"
      style={{
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      }}
    >
      <h1 className="text-2xl">
        <img src={img} alt="Logo" className="w-20 ml-5" />
      </h1>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="p-2 rounded-l-2xl rounded-r-2xl mr-3 text-black w-[30vw] "
        />
        <button type="submit" className="p-3 bg-white w-[3vw] rounded-full">
          <img src={img1} alt="" />
        </button>
      </form>
      <div>
        {user ? (
          <button
            onClick={handleLogout}
            className="p-[0.6rem]  rounded-lg w-[10vw] mr-5  bg-gradient-to-r bg-[#E90045] hover:bg-[#ff3a3a]"
          >
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
// bg-[#E90045]
