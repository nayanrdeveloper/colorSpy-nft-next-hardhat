import React from "react";
import { useCelo } from "@celo/react-celo";
import { shortAddress } from "../../utils/shortenAddress";

function NavRight() {
  const { connect, address, disconnect } = useCelo();
  console.log(address);
  return (
    <div className="flex gap-2 items-center">
      {address ? (
        <div className="flex gap-2">
          <span className="py-2 rounded-lg px-2 bg-blue hover:bg-hover-blue cursor-pointer text-white">
            {shortAddress(address)}
          </span>
          <button className="yellow-button" onClick={disconnect}>
            Wallet Disconnect
          </button>
        </div>
      ) : (
        <div>
          <button className="yellow-button" onClick={e => connect().catch((e) => alert(e.message))}>
            Wallet Connect
          </button>
        </div>
      )}
    </div>
  );
}

export default NavRight;
