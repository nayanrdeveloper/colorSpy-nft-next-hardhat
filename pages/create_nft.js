import React, { useState } from 'react'
import CreateNFTBoard from '../components/CreateNFT/CreateNFTBoard'
import NFTPreview from '../components/CreateNFT/NFTPreview'


function CreateNFT() {
    const [nftData, setNFTData] = useState({
        "title" : "",
        "price": "",
        "description": "",
        "category": "",
        "noOfCopies": "",
        "isAcceptCondition": false,
    });
    const [image, setImage] = useState();
    const onchangeNFTInput = (event) => {
        setNFTData({
          ...nftData,
          [event.target.name]: event.target.value,
        });
      };

    const createNFT = () => {
        console.log(nftData);
    }
  return (
    <div className="mt-20 container">
        {/* <h3 className=" text-white2">Create New</h3> */}
        <div className="flex justify-between mt-10">
            <CreateNFTBoard data={nftData} setnftdata={setNFTData} setimage={setImage} onchangedata={onchangeNFTInput} createnft={createNFT} />
            <NFTPreview data={nftData} image={image} />
        </div>
    </div>
  )
}

export default CreateNFT