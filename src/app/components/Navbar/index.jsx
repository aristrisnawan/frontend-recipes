"use client";
import React, { useState } from "react";
import Image from "next/image";
import salad from "../../../images/salad.png";
import Modal from "../Modal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalParams, setModalParams] = useState({});
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const openModel = (key) => {
    setModalParams({ key });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload("/");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" bg-yellow-300 fixed w-full sm:px-5">
      <div className="flex md:flex-row flex-row justify-between md:items-center p-4 gap-2">
        <a href="/" className=" cursor-pointer">
          <Image src={salad} alt="icon" className=" h-7 w-7" />
        </a>
        {token ? (
          <div className="flex gap-2">
            <div className=" cursor-pointer my-auto">
            <a
              href="/form-recipes"
              className="px-3 py-2rounded-md"
            >
              Tambah Resep
            </a>
          </div>
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium leading-5 text-white bg-gray-700 border border-gray-700 rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray active:bg-gray-800 transition ease-in-out duration-150"
              >
                <span>{`Halo ${name}`}</span>
                <svg
                  className="w-4 h-4 ml-2 -mr-1 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.586L4.707 7.293a1 1 0 0 1 1.414-1.414L10 10.758l4.879-4.879a1 1 0 1 1 1.414 1.414L10 12.586z"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <div className=" cursor-pointer">
              <a
                href="#"
                className=" font-semibold bg-blue-600 px-3 py-2 text-white rounded-md"
                onClick={() => openModel("login")}
              >
                LOGIN
              </a>
            </div>
            <div className=" cursor-pointer ">
              <a
                href="#"
                className=" font-semibold bg-green-400 px-3 py-2 text-white rounded-md"
                onClick={() => openModel("register")}
              >
                REGISTER
              </a>
            </div>
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        paramsModal={modalParams.key}
      />
    </header>
  );
};

export default Navbar;
