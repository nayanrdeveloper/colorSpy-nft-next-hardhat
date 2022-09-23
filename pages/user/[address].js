import Image from "next/image";
import React from "react";

function address() {
  return (
    <div>
      <div className="bg-[url('/background_image.jpg')]">
        <div className="container py-7 flex gap-10">
          <div>
            <Image
              src={"/user.jpg"}
              alt=""
              height={250}
              width={250}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <h3 className="my-auto text-3xl font-bold text-white">NFT Fun</h3>
              <button className="yellow-button">Follow</button>
            </div>
            <span className="text-white">@nft_fun</span>
            <p>
              When you purchased an item, we provide six months of free support.
              We provide customer support via email. For support, you can
              contact us via the profile page or item support tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default address;
