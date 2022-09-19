import React from "react";

function CreateNFTBoard({ data, setnftdata, setimage, createnft }) {
    console.log(data);
  return (
    <div className="border border-nav-border p-5 rounded-md">
      <h3 className=" text-white2 text-4xl font-semibold">Create New NFT</h3>
      <div className="mt-10 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label className="block text-sm font-medium text-[#8480ae]" htmlFor="file">
            Upload Files
          </label>
          <input
            className="block w-[45rem] text-sm  bg-transparent rounded-lg file:bg-[#1f0757] file:px-8 file:text-white file:py-3 file:rounded-md file:border file:border-[#1f0757]  cursor-pointer focus:outline-none"
            id="file"
            type="file"
            onChange={(e) => setimage(e.currentTarget.files[0])}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="block text-sm font-medium text-[#8480ae]" htmlFor="title">
            Title
          </label>
          <input
            type={"text"}
            id="title"
            className="input-border"
            name="title"
            value={data.title}
            onChange={(e) => setnftdata({...data,title: e.currentTarget.value})}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="block text-sm font-medium text-[#8480ae]" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="input-border h-32"
            name="description"
            value={data.description}
            onChange={(e) => setnftdata({...data,description: e.currentTarget.value})}
          />
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <label className="block text-sm font-medium text-[#8480ae]" htmlFor="price">
              Price
            </label>
            <input
              type={"number"}
              id="price"
              className="input-border w-full"
              name="price"
              value={data.price}
              onChange={(e) => setnftdata({...data,price: e.currentTarget.value})}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="block text-sm font-medium text-[#8480ae]" htmlFor="category">
              Category
            </label>
            <select
              type={"text"}
              id="category"
              className="input-border w-72"
              name="category"
              value={data.category}
              onChange={(e) => setnftdata({...data,category: e.currentTarget.value})}
            >
              <option>Art</option>
              <option>Cards</option>
              <option>Collections</option>
              <option>Domain</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <label className="block text-sm font-medium text-[#8480ae]" htmlFor="noOfCopies">
              No of Copies
            </label>
            <input
              type={"number"}
              id="noOfCopies"
              className="input-border w-full"
              name="noOfCopies"
              value={data.noOfCopies}
              onChange={(e) => setnftdata({...data,noOfCopies: e.currentTarget.value})}
            />
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex gap-2">
            <input
              type={"checkbox"}
              id="isAcceptCondition"
              className="input-border"
              name="isAcceptCondition"
              value={data.isAcceptCondition}
              onChange={(e) => setnftdata({...data,isAcceptCondition: e.currentTarget.value})}
            />
            <label className="block text-sm font-medium text-[#8480ae] my-auto" htmlFor="isAcceptCondition">
              I agree to all terms and conditions.
            </label>
          </div>
          <div className="flex gap-2">
            <button className="blue-button" onClick={createnft}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNFTBoard;
