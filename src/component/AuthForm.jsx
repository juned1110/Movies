import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithGoogle, signupWithEmail, loginWithEmail } from '../store/authSlice';

const AuthForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl mb-4">{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input type="email" value={email} onChange={handleEmailChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} className="w-full p-2 border rounded" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">{loading ? 'Loading...' : isLogin ? 'Login' : 'Sign Up'}</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button type="button" onClick={() => dispatch(loginWithGoogle())} className="w-full bg-red-500 text-white p-2 rounded mt-4">Login with Google</button>
        <button type="button" onClick={toggleMode} className="w-full text-blue-500 mt-4">{isLogin ? 'Create an account' : 'Already have an account?'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
