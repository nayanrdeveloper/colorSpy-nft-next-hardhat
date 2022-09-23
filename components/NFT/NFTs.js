import React from "react";
import NFTCard from "./NFTCard";

function NFTs() {
  const NFTList = [
    {
      name: "Diamond Almonds",
      image: "/horse.jpg",
      price: "0.05",
      userImage: "/user.jpg",
      userName: "creative_art",
    },
    {
      name: "Cowboy Riding",
      image: "/joker.jpg",
      price: "0.05",
      userImage: "/user2.jpg",
      userName: "@desining_world",
    },
    {
      name: "Diamond Almonds",
      image: "/horse.jpg",
      price: "0.05",
      userImage: "/user.jpg",
      userName: "creative_art",
    },
    {
      name: "Cowboy Riding",
      image: "/joker.jpg",
      price: "0.05",
      userImage: "/user2.jpg",
      userName: "@desining_world",
    },
  ];
  return (
    <div className="mt-20 container">
      <h3 className="text-4xl text-white2">Editors Picks</h3>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {NFTList.map((nft,index) => {
          return <NFTCard key={index} nftData={nft} />;
        })}
      </div>
    </div>
  );
}

export default NFTs;
