import React from "react";
import Image from "next/image";
import salad from "../../../images/salad.png";

const Card = () => {
  return (
    <div className=" shadow-md rounded-md h-full py-2 sm:w-80">
      <div className=" h-36 bg-slate-700 rounded-t-md w-full">
        <Image src={salad} alt="food" className=" w-full h-full bg-cover" />
      </div>
      <div className=" mx-2 my-4">
        <h2 className=" my-1 font-semibold">Nasi Goreng</h2>
        <p className=" text-sm line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque
          suscipit exercitationem dolores recusandae adipisci non cumque iusto
          nesciunt placeat? Aliquam illum tenetur natus adipisci officiis minus,
          aut neque iusto?
        </p>
        <div className=" mt-2">
          <a className=" bg-blue-400 py-2 px-3 rounded-lg cursor-pointer">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
