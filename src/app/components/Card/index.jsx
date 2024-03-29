/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Card = ({ api }) => {
  const data = api?.data;
  console.log('coy', data.length);
  return data.map((datas, idx) => {
    return (
      <div className=" shadow-md rounded-md h-full py-2 sm:w-80" key={idx}>
        <div className=" h-36 bg-slate-700 rounded-t-md w-full">
          <img src={`http://localhost:3000/${datas.path.replace(/\\/g, '/')}`} alt="food" className=" w-full h-full bg-cover" />
        </div>
        <div className=" mx-2 my-4">
          <h2 className=" my-1 font-semibold">{datas.title}</h2>
          <p className=" text-sm line-clamp-3">
            {datas.description}
          </p>
          <div className=" mt-2">
            <Link href={`/recipes/${datas?._id}`} className=" bg-blue-400 py-2 px-3 rounded-lg cursor-pointer">
              Read more
            </Link>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
