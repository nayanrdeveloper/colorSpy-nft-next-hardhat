import Image from "next/image";
import React from "react";

function StepCard({ data }) {
  return (
    <div className="flex flex-col bg-[#1f0757] p-5 rounded-lg gap-3 relative z-10">
      <Image src={data.image} alt={data.step} height={100} width={100} />
      <h4 className="text-white2 text-2xl text-center">{data.title}</h4>
      <p className="text-center">{data.description}</p>
      <span className="absolute -z-10 left-0 bottom-[-2rem] font-bold text-[6rem] text-[rgba(194,212,248,.15)]">{data.step}</span>
    </div>
  );
}

export default StepCard;
