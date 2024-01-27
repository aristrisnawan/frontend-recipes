/* eslint-disable @next/next/no-img-element */
import { getDetail } from "@/libs/app-libs";
import React from "react";
import back from "../../../images/back.png";
import Image from "next/image";

const Detail = async ({ params }) => {
  const { recipesId } = params;
  const detailRecipes = await getDetail(`api/recipes/${recipesId}`);
  return (
    <div className=" pt-20 pb-6 mx-2 lg:mx-36">
      <div>
        <a href="/">
          <Image src={back} alt="left-arrow" className=" w-4"/>
        </a>
      </div>
      <div className=" lg:mx-auto flex items-center justify-center">
        <div className=" w-full h-48 rounded-md mb-2 md:w-96 md:mb-20">
          <img
            src={`http://localhost:3000/${detailRecipes?.data?.path.replace(
              /\\/g,
              "/"
            )}`}
            alt=""
            className=" rounded-md bg-cover w-full"
          />
        </div>
      </div>
      <div className="">
        <h2 className=" font-semibold text-lg mt-5 mb-3">
          {detailRecipes?.data?.title}
        </h2>
        <p className=" text-justify my-2 text-sm">
          {detailRecipes?.data?.description}
        </p>
        <h2 className=" font-semibold py-2">Langkah-langkah : </h2>
        <p>{detailRecipes?.data?.steps}</p>
      </div>
    </div>
  );
};

export default Detail;
