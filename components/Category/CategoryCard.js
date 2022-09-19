import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from 'react-icons/bs';


function CategoryCard({ data }) {
  return (
    <div className="p-5 bg-[#1f0757] rounded-lg gap-3">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          <Image
            src={data.image1}
            alt={data.name}
            height="100%"
            width={"100%"}
          />
          <Image
            src={data.image2}
            alt={data.name}
            height="100%"
            width={"100%"}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Image
            src={data.image3}
            alt={data.name}
            height="100%"
            width={"100%"}
          />
          <Image
            src={data.image4}
            alt={data.name}
            height="100%"
            width={"100%"}
          />
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="mt-1 flex gap-1">
            <h4 className="text-2xl text-white2">{data.name}</h4>
            <span className="bg-light-blue rounded-full w-8 h-6 my-auto text-center text-white">{data.totalCount}</span>
        </div>
        <div className="flex">
            <button className="text-white hover:text-hover-blue px-5 py-2">View All</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
