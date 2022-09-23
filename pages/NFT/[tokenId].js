import Image from "next/image";
import React from "react";
import { BsHeart } from "react-icons/bs";

function tokenId() {
  return (
    <div className="mt-20 container">
      <h3 className="text-4xl text-white2">Details</h3>
      <div className="mt-10">
        <div className="flex gap-8">
          <div>
            <Image
              src={"/category4.jpg"}
              alt="hg"
              height={1000}
              width={1100}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="bg-[#dc3545] w-20 py-2 px-3 rounded-3xl text-white hover:bg-[#bb2d3b] flex gap-2">
              <BsHeart className="my-auto" />
              <span>125</span>
            </span>
            <h3 className="text-3xl font-bold text-white2">Monkey Arts #114</h3>
            <div className="flex gap-2">
              <Image
                src={"/user2.jpg"}
                alt="user"
                height={70}
                width={70}
                className="rounded-full"
              />
              <div className="flex flex-col my-auto gap-2">
                <span>Created By</span>
                <span>@nft_fun</span>
              </div>
            </div>
            <div className="flex justify-between py-7  border-y border-nav-border">
              <span className="px-5 py-3 border-2 border-nav-border font-bold text-[rgba(13,110,253,1)]">
                0.861 ETH
              </span>
              <button className="blue-button">Buy Now</button>
            </div>
            <div className="flex flex-col py-3">
              <h3 className="text-2xl font-bold text-white2">Short Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                aut veniam consectetur magnam libero, natus dhgdfshg eryery edfsd ewtewt
                eryery ewe sdtgdsg eryre reyery eryre
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tokenId;
