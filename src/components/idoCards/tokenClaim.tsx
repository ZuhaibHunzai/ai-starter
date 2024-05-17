"use client";
import { useAccount, useWriteContract } from "wagmi";
import { IDO_ADDRESS } from "@/app/addresses";
import abi from "@/abis/idoAbi.json";
import IdoCard from "../idoCard";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

const CountdownTimer = dynamic(() => import("./countDownTimer"), {
  ssr: false,
});

export default function TokenClaim() {
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();
  async function Claim() {
    try {
      if (address) {
        const hash = await toast.promise(
          writeContractAsync({
            address: IDO_ADDRESS,
            abi,
            functionName: "claimBTC",
            args: [],
          }),
          {
            loading: "claiming...",
            success: "claimed BTC successfully",
            error: "error claiming BTC ",
          }
        );
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <main>
      <IdoCard>
        <h1 className="text-[24px] font-[700]">Token Claim</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[85px] justify-between">
          <div className="mt-4">
            <p className="text-[#B0B0B0] font-[500]">Total Allocation</p>
            <input
              type="text"
              placeholder=""
              className="bg-[#242424] w-[200px] h-12 rounded-lg mt-2 outline-none border-none p-2"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#B0B0B0] font-[500]">Total Claimed</p>
            <input
              type="text"
              placeholder=""
              className="bg-[#242424] w-[200px] h-12 rounded-lg mt-2 outline-none border-none p-2"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#B0B0B0] font-[500]">Claimable Now</p>
            <input
              type="text"
              placeholder=""
              className="bg-[#242424] w-[200px] h-12 rounded-lg mt-2 outline-none border-none p-2"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#B0B0B0] font-[500]">Invested</p>
            <input
              type="text"
              placeholder=""
              className="bg-[#242424] w-[200px] h-12 rounded-lg mt-2 outline-none border-none p-2"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#B0B0B0] font-[500]">Next Unlock Date</p>
            <p className="flex justify-center items-center text-center bg-[#242424] w-[200px] h-16 rounded-lg mt-2  p-2 text-white">
              2024/05/24 20:00 UTC
            </p>
          </div>
          <div className="mt-4">
            <p className="text-[#B0B0B0] font-[500]">Next Unclock</p>
            <input
              type="text"
              placeholder=""
              className="bg-[#242424] w-[200px] h-12 rounded-lg mt-2 outline-none border-none p-2"
            />
          </div>
        </div>
        <div>
          <CountdownTimer />
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-[#434866] py-2 px-4 rounded-full font-[700] cursor-pointer"
            onClick={Claim}
          >
            Claim
          </button>
        </div>
      </IdoCard>
    </main>
  );
}
