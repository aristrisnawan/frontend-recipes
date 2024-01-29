"use client";
import React, { useState } from "react";
import Image from "next/image";
import salad from "../../../images/salad.png";
import Modal from "../Modal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalParams, setModalParams] = useState({});

  const openModel = (key) => {
    setModalParams({ key });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className=" bg-yellow-300 fixed w-full sm:px-5">
      <div className="flex md:flex-row flex-row justify-between md:items-center p-4 gap-2">
        <a href="/" className=" cursor-pointer">
          <Image src={salad} alt="icon" className=" h-7 w-7" />
        </a>
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
