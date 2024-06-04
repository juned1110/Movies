import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginWithGoogle,
  signupWithEmail,
  loginWithEmail,
} from "../store/authSlice";
import img from "../assets/google.jpg";

const AuthForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginWithEmail(email, password));
    } else {
      dispatch(signupWithEmail(email, password));
    }
  };

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md mt-1 w-80 rounded-3xl"
      >
        <div className="mb-4">
          <h1 className="text-3xl mb-4 font-bold ml-[6vw]">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          <label className="block mb-1 font-semibold mt-3">Email</label>
          <input
            type="email"
            placeholder="Enter Email Id"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border rounded-xl mb-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            placeholder="••••••••••••••••"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-2 border rounded-xl mb-3"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#080D16] hover:bg-[#0f1727] text-white p-2 rounded-2xl font-semibold "
        >
          {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          type="button"
          onClick={() => dispatch(loginWithGoogle())}
          className="w-full bg-[#FFFFFF] hover:bg-[#e9e5e5] border-2 text-black rounded-2xl mt-4 font-semibold flex"
        >
          <img src={img} alt="" className="w-10 ml-5 rounded-3xl" />
          <p className="ml-3 mt-2">Login with Google </p>
        </button>
        <button
          type="button"
          onClick={toggleMode}
          className="w-full text-blue-500 mt-4 font-semibold ml-4 flex"
        >
          <p className="mr-2 text-zinc-900">Don't have :</p>
          {isLogin ? "Create one!" : "Already have an account?"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
