import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

function NFTCard({ nftData }) {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-card-color">
      <Image src={nftData.image} alt={nftData.name} height={150} width={150} />
      <div className="p-4 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <Image
              src={nftData.userImage}
              alt={nftData.userName}
              width={30}
              height={30}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="text-dark1 hover:text-[#0a58ca] cursor-pointer truncate w-32">
                {nftData.name}
              </h4>
              <span className="text-dark1 hover:text-[#0a58ca] cursor-pointer truncate w-32">
                {nftData.userName}
              </span>
            </div>
          </div>
          <div>
            <span className="text-white2">{nftData.price} ETH</span>
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
  );
}

export default NFTCard;
