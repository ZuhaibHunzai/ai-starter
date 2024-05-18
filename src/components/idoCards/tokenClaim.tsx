"use client";
import { useAccount, useWriteContract } from "wagmi";
import { IDO_ADDRESS } from "@/app/addresses";
import abi from "@/abis/idoAbi.json";
import IdoCard from "../idoCard";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { MdOutlineDateRange } from "react-icons/md";

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
        <div className="grid grid-cols-1 md:grid-cols-2  justify-between box-content gap-4">
          <div className="">
            <p className="text-[#B0B0B0] font-[500]">Total Allocation</p>
            <div className="h-16 flex rounded-lg mt-2 p-2 bg-[#242424]">
              <input
                type="text"
                disabled
                placeholder=""
                className="w-full outline-none border-none "
              />
            </div>
          </div>
          <div className="">
            <p className="text-[#B0B0B0] font-[500]">Total Claimed</p>
            <div className="h-16 flex rounded-lg mt-2 p-2 bg-[#242424]">
              <input
                type="text"
                disabled
                placeholder=""
                className="w-full outline-none border-none "
              />
            </div>
          </div>
          <div className="">
            <p className="text-[#B0B0B0] font-[500]">Claimable Now</p>
            <div className="h-16 flex rounded-lg mt-2 p-2 bg-[#242424]">
              <input
                type="text"
                disabled
                placeholder=""
                className="w-full outline-none border-none "
              />
            </div>
          </div>
          <div className="">
            <p className="text-[#B0B0B0] font-[500]">Invested</p>
            <div className="h-16 flex rounded-lg mt-2 p-2 bg-[#242424]">
              <input
                type="text"
                disabled
                placeholder=""
                className=" w-full outline-none border-none "
              />
            </div>
          </div>
          <div className="">
            <p className="text-[#B0B0B0] font-[500]">Next Unlock Date</p>
            <div className="flex relative items-center bg-[#242424] rounded-lg mt-2 gap-2 p-2">
              <MdOutlineDateRange className="w-5 h-5 " />
              <input
                type="text"
                disabled
                placeholder="2024/05/24 20:00 UTC"
                className=" w-full outline-none border-none h-12 "
              />
            </div>
          </div>
          <div className="">
            <p className="text-[#B0B0B0] font-[500]">Next Unclock</p>
            <div className="h-16 flex rounded-lg mt-2 p-2 bg-[#242424]">
              <input
                type="text"
                disabled
                placeholder=""
                className="w-full outline-none border-none "
              />
            </div>
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
