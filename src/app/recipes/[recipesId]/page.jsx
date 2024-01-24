/* eslint-disable @next/next/no-img-element */
import { getDetail } from "@/libs/app-libs";
import React from "react";

const Detail = async ({ params }) => {
  const { recipesId } = params;
  const detailRecipes = await getDetail(`api/recipes/${recipesId}`);
  console.log("halo", detailRecipes);
  return (
    <div className=" pt-16 mx-2">
      <div className=" w-full h-48 rounded-md mb-2">
        <img
          src={`http://localhost:3000/${detailRecipes?.data?.path.replace(
            /\\/g,
            "/"
          )}`}
          alt=""
          className=" rounded-md bg-cover"
        />
      </div>
      <h2 className=" font-semibold text-lg mt-5 mb-3">
        {detailRecipes?.data?.title}
      </h2>
      <p className=" text-justify my-2 text-sm">
        {detailRecipes?.data?.description}
      </p>
      <p>{detailRecipes?.data?.steps}</p>
    </div>
  );
};

export default Detail;
