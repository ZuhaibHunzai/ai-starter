import IdoCard from "../idoCard";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegCircleStop } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
export default function SaleDetails({ section }: { section: string }) {
  return (
    <main>
      <IdoCard>
        <h1 className="text-[24px] font-[700] mb-2">Sale Details</h1>
        <div className="flex justify-between items-center mt-2">
          <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
            Sale Allocation
          </h2>
          <h2 className="flex text-[20px] font-[700]">10,000,000 CLOT</h2>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
            Deposit Token
          </h2>
          <h2 className="flex text-[20px] font-[700] uppercase">{section}</h2>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
            Total Deposits
          </h2>
          <h2 className="flex text-[20px] font-[700]">1,234,567,890.123456</h2>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">Price</h2>
          <h2 className="flex text-[20px] font-[700] uppercase">
            0.000000686 {section}
          </h2>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
            Max Deposit
          </h2>
          <h2 className="flex text-[20px] font-[700] uppercase">
            0.016 {section}
          </h2>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">Hard Cap</h2>
          <h2 className="flex text-[20px] font-[700] uppercase">
            7.628 {section}
          </h2>
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
          <div className="flex flex-col">
            <div className="flex flex-col pl-4">
              <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
                WL Open
              </h2>
              <h2 className="flex text-[20px] font-[700]">
                May 24,2024 01:00 UTC
              </h2>
            </div>
            <div className="flex flex-col mt-8 pl-4">
              <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
                Public Opens
              </h2>
              <h2 className="flex text-[20px] font-[700]">
                May 25,2024 01:00 UTC
              </h2>
            </div>
            <div className="flex flex-col mt-8 pl-4">
              <h2 className=" text-[#B0B0B0] text-[20px] font-[700] ">
                Closes
              </h2>
              <h2 className="flex text-[20px] font-[700]">
                Jun 02,2024 01:00 UTC
              </h2>
            </div>
          </div>
        </div>
        <h2 className="mt-4 text-[#B0B0B0] text-[20px] font-[700] ">
          Progress
        </h2>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
          <div
            className="flex justify-start items-center pl-4 text-[22px] font-[700] bg-[#8395F9]  text-blue-100 rounded-full h-12"
            style={{ width: "42.25%" }}
          >
            42.25%
          </div>
        </div>
      </IdoCard>
    </main>
  );
}
