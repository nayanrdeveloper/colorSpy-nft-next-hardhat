import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";

function NFTPreview({data, image}) {
  return (
    <>
    <div className="flex flex-col w-80 h-full gap-2 p-6 rounded-md bg-card-color border-2 border-nav-border">
    <Image src={image? URL.createObjectURL(image) : "/category1.jpg"} alt={""} height={150} width={150} />
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex gap-1">
          <Image
            src={"/category1.jpg"}
            alt={""}
            width={35}
            height={35}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h4 className="text-dark1 hover:text-[#0a58ca] cursor-pointer truncate w-32 my-auto">
             {data.title}
            </h4>
            <span className="text-dark1 hover:text-[#0a58ca] cursor-pointer truncate w-32 my-auto">
              THis is a User
            </span>
          </div>
        </div>
        <div>
          <span className="text-white2">{data.price} ETH</span>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="card-button">Place Bid</button>
        <div className="my-auto">
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default NFTPreview