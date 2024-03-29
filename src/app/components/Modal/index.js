import React, { useState } from "react";
import axios from 'axios';

const Modal = ({ isOpen, onClose, paramsModal }) => {
  if (!isOpen) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUsername] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,{username,password})
      const data = response.data;
      const token = data.token;
      const name = data.username;
      localStorage.setItem('token', token);
      localStorage.setItem('name', name);
      window.location.reload()
      setUsername('')
      setPassword('')
    } catch (error) {
      console.log('Login failed', error.message);
    }
  }
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-md shadow-lg w-96">
          {/* Modal Content Goes Here */}
          <div className=" flex justify-between">
            <p className="text-gray-800 font-semibold">
              {paramsModal === "login" ? "LOGIN" : "REGISTER"}
            </p>
            <div>
              <a
                onClick={onClose}
                className=" px-2 py-1 rounded-sm cursor-pointer font-bold text-lg hover:bg-red-500 "
              >
                x
              </a>
            </div>
          </div>
          <div>
            <form class="bg-white px-8 pt-6 pb-8 mb-4">
              {paramsModal === "register" && (
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    required
                    placeholder="Name"
                  />
                </div>
              )}
              {/* login */}
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-semibold md:font-bold py-1 px-2 md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
                >
                  {paramsModal === 'login' ? 'Sign In' : 'Sign Up'}
                </button>
                {/* <a
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
