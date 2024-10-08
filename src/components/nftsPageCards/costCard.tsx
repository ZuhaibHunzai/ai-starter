"use client";
import Image from "next/image";
import img from "../../../public/assets/ido-cover.png";
import { FaAngleDown } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { useState } from "react";

export default function CostCard() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = Array.from({ length: 10 }, (_, i) => i + 1);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChange = (event: { target: { value: string } }) => {
    setSelectedOption(parseInt(event.target.value));
  };
  return (
    <main>
      <div className="w-full px-2">
        <div className="bg-transparent col-span-3 flex flex-col ">
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
            <h1 className="text-[#8395F9] font-[700] text-3xl">
              0.123456789 BTC
            </h1>
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
            <div className="w-full flex justify-between items-center pl-2 border border-gray-400 rounded-r-lg ">
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
                  <p>MAX: {selectedOption}</p>
                </div>
                <div className="flex">
                  <div className="relative flex justify-center items-center ">
                    <div
                      className=" bg-gray-400 text-black text-xl rounded ml-2 flex justify-center items-center cursor-pointer"
                      onClick={toggleSelect}
                    >
                      <FaAngleDown />
                    </div>
                    {isOpen && (
                      <div className="absolute mt-1 w-full top-5 left-1 bg-gray-800 border-transparent rounded-lg cursor-pointer ">
                        {options.map((option) => (
                          <div
                            key={option}
                            className="p-1 cursor-pointer text-white hover:bg-gray-400"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-2">
              your wallet balance{" "}
              <span className="text-[#8395F9]">1.1235465</span>
            </p>
          </div>
          <div className="mt-2">
            <div className="w-full flex justify-center flex-col md:flex-row col items-center gap-4">
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

              <div className="w-full">
                <button className="block w-full rounded-full bg-[#8395F9]  py-2 md:ml-2 text-center cursor-pointer">
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
