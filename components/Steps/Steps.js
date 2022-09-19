import React from "react";
import StepCard from "./StepCard";

function Steps() {
  const stepList = [
    {
      image: "/create_account.png",
      title: "Create your account & add wallet",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      step: "1",
    },
    {
      image: "/herosection.png",
      title: "Get approval from our review team",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      step: "2",
    },
    {
      image: "/create_nft.png",
      title: "Create your NFT's & list them for sale",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      step: "3",
    },
    {
      image: "/sale_nft.png",
      title: "Now sale your items & earn rewards",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      step: "4",
    },
  ];
  return (
    <div className="mt-20 container">
         <h3 className="text-4xl text-white2">steps</h3>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {stepList.map((stepData) => {
          return <StepCard key={stepData.step} data={stepData} />;
        })}
      </div>
    </div>
  );
}

export default Steps;
