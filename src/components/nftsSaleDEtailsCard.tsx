import IdoCard from "./idoCard";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegCircleStop } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

export default function NftsSaleDetailsCard() {
  return (
    <main className="w-full">
      <IdoCard>
        <h1 className="text-[24px] font-[700] mb-2">Sale Details</h1>
        <div className="flex justify-between items-center mt-2">
          <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">Hard Cap</h2>
          <h2 className="flex text-[20px] font-[700]">1,234,567,890 BTC</h2>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
            Deposit Token
          </h2>
          <h2 className="flex text-[20px] font-[700]">BTC</h2>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
            Total Deposits
          </h2>
          <h2 className="flex text-[20px] font-[700]">11,234,567,890.123456</h2>
        </div>

        <div className="flex mt-4">
          <div>
            <div className="flex flex-col items-center ">
              <div className="h-16 w-16 bg-[#8395F9] rounded-full flex justify-center items-center">
                <TfiMenuAlt className="w-8 h-8" />
              </div>

              <div className="flex flex-col justify-between">
                <span className="h-[25px] w-[3px] bg-[#8395F9]"></span>
              </div>
              <div className="h-16 w-16 bg-[#8395F9] rounded-full flex justify-center items-center">
                <MdOutlineDateRange className="w-8 h-8" />
              </div>
              <div className="flex flex-col justify-between">
                <span className="h-[25px] w-[3px] bg-[#8395F9]"></span>
              </div>
              <div className="h-16 w-16 bg-[#8395F9] rounded-full flex justify-center items-center">
                <FaRegCircleStop className="w-8 h-8" />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <div className="flex flex-col pl-4">
              <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
                WL Open
              </h2>
              <h2 className="flex text-[20px] font-[700]">
                May 03,2024 11:10 UTC
              </h2>
            </div>
            <div className="flex flex-col mt-8 pl-4">
              <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
                Public Opens
              </h2>
              <h2 className="flex text-[20px] font-[700]">
                May 03,2024 11:10 UTC
              </h2>
            </div>
            <div className="flex flex-col mt-8 pl-4">
              <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
                Closes
              </h2>
              <h2 className="flex text-[20px] font-[700]">
                May 05,2024 11:00 UTC
              </h2>
            </div>
          </div>
        </div>
      </IdoCard>
    </main>
  );
}
