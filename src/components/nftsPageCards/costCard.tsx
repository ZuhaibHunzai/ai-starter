import Image from "next/image";
import img from "../../../public/assets/ido-cover.png";

import { BsTwitterX } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

export default function CostCard() {
  return (
    <main>
      <div className="w-full p-2">
        <div className="bg-transparent col-span-3 flex flex-col">
          <div className="md:flex md:justify-end hidden ">
            <a
              href="https://twitter.com/AIStarter_xyz"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer"
            >
              <BsTwitterX className="mr-4" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href=""
              className="cursor-pointer"
            >
              <TbWorld />
            </a>
          </div>
          <div>
            <p>Cost</p>
            <h1 className="text-[#8359F9] font-[700]">0.123456789 BTC</h1>
          </div>
          <div className="flex mt-2">
            <div>
              <Image
                src={img}
                width={100}
                height={100}
                alt="img"
                className=""
              />
            </div>
            <div className="flex justify-center items-center pl-2">
              <div className="flex flex-col text-sm">
                <div>
                  <p>Bored Ape Gof NFT</p>
                </div>
                <div>
                  <p>0.0001 BTC | 38/40</p>
                </div>
              </div>
              <div className="flex items-center p-2">
                <div>
                  <p>MAX:</p>
                </div>
                <div>
                  <p>40</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-2">
              You wallet balance{" "}
              <span className="text-[#8359F9]">1.1235465</span>
            </p>
          </div>
          <div className="mt-2">
            <div className="flex justify-center items-center">
              <div className="w-full h-[50px] bg-[#242424] flex justify-between items-center gap-1 rounded-lg   px-1">
                <input
                  type="text"
                  placeholder="1-5"
                  className="outline-none border-none bg-transparent pl-2 w-full"
                />

                <button className="bg-[#434866] text-xs py-2 px-4 rounded-lg font-[700]">
                  MAX
                </button>
              </div>

              <button className="rounded-full bg-[#8359F9] px-4 py-2 ml-2">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
