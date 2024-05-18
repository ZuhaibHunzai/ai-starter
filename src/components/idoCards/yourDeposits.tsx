"use client";
import { useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import IdoCard from "../idoCard";
import { IDO_ADDRESS } from "@/app/addresses";
import abi from "@/abis/idoAbi.json";
import { parseEther } from "viem";
import toast from "react-hot-toast";
import { useBalance } from "wagmi";

export default function YourDeposits() {
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();
  const result = useBalance({
    address: address,
  });

  async function deposit() {
    try {
      if (address) {
        const hash = await toast.promise(
          writeContractAsync({
            address: IDO_ADDRESS,
            abi,
            functionName: "joinIdo",
            args: [],
          }),
          {
            loading: "depositing...",
            success: "deposited successfully",
            error: "something went wrong",
          }
        );
        console.log("hash hash ash", hash);
      }
    } catch (e) {
      console.log(e, "error  error");
    }
  }
  return (
    <main>
      <IdoCard>
        <div className="flex justify-between">
          <div>
            <h1 className="text-[24px] font-[700]">Your Deposit</h1>
          </div>
          <div>
            <h1 className="text-[#8395F9] text-[24px] font-[700]">
              0.1234567890
            </h1>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <p className="text-[22px] font-[500]">
            your wallet balance:
            <span className="text-[#8395F9] font-[700] ml-2">
              {result?.data?.formatted} {result?.data?.symbol}
            </span>
          </p>
        </div>
        <div className="w-full h-[50px] bg-[#242424] flex justify-between items-center rounded-lg  mt-2">
          <div>
            <input
              type="text"
              placeholder={result?.data?.formatted}
              className="outline-none border-none bg-transparent pl-2"
            />
          </div>
          <div className="flex items-center pr-2">
            <div>
              <button className="bg-[#434866] py-2 px-4 rounded-lg font-[700] mr-4">
                MAX
              </button>
            </div>
            <div>
              <p className="font-[700]">BTC</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-[#8395F9] font-[400]">How to participate</p>
          </div>
          <div>
            <button
              className="bg-[#8395F9] py-2 px-4 rounded-full font-[700] cursor-pointer"
              onClick={deposit}
            >
              Deposit
            </button>
          </div>
        </div>
      </IdoCard>
    </main>
  );
}
