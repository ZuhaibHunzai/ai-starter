"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="px-5 md:px-10 py-10 flex justify-between lg:px-36 items-center relative ">
      <div className=" p-4">
        <Link href="/">
          <Image
            src={"/assets/Logo.png"}
            className=" w-36 lg:w-44"
            width={300}
            height={30}
            alt="logo"
          />
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 cursor-pointer"
        >
          <Image
            src={"/assets/menu.png"}
            alt="menu"
            width={20}
            height={20}
            className={`fill-current  ${isOpen ? "hidden" : "block"}`}
          ></Image>
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <div
        className={` w-full flex flex-col items-center  gap-y-8 p-3   absolute z-10 right-0 top-28 bg-[#111116]   lg:relative  lg:top-0  lg:flex-row lg:justify-end  lg:items-center lg:gap-x-10 lg:flex ${
          isOpen ? "block" : "hidden"
        } `}
      >
        <Link
          href="/ido"
          className=" text-xl lg:text-xl font-bold border-b-2 border-transparent hover:border-b-[#8395F9] hover:transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          IDO
        </Link>
        <Link
          href="/coming-soon"
          className=" text-xl lg:text-xl font-bold border-b-2 border-transparent hover:border-b-[#8395F9] hover:transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          NFT
        </Link>
        <Link
          href="/coming-soon"
          className=" text-xl lg:text-xl font-bold border-b-2 border-transparent hover:border-b-[#8395F9] hover:transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          Airdrop
        </Link>

        <ConnectButton />
      </div>
    </main>
  );
}
