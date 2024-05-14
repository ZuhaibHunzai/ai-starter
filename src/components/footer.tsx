import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { LiaMediumM } from "react-icons/lia";

export default function Footer() {
  return (
    <section className=" flex  flex-col px-5 md:px-24 py-10   ">
      <div className="flex  flex-col  gap-y-6 justify-center items-center  sm:justify-between sm:flex-row">
        <div className="  ">
          <Image
            src={"/assets/Logo.png"}
            className=" w-36 lg:w-44"
            width={300}
            height={30}
            alt="logo"
          />
        </div>
        <div className=" flex gap-x-6">
          <a
            href="https://twitter.com/AIStarter_xyz"
            target="_blank"
            rel="noreferrer"
            className=" p-3 bg-[#313131] rounded-full"
          >
            <BsTwitterX className="  text-2xl  text-white" />
          </a>
          <Link href={"#"} className=" p-3 bg-[#313131] rounded-full">
            <FaGithub className="  text-2xl  text-white" />
          </Link>
          <Link href={"#"} className=" p-3 bg-[#313131] rounded-full">
            <FaDiscord className="  text-2xl  text-white" />
          </Link>
          <Link href={"#"} className=" p-3 bg-[#313131] rounded-full">
            <LiaMediumM className="  text-2xl  text-white" />
          </Link>
        </div>
      </div>
      <div className=" pt-6">
        <hr className=" border border-[#B0B0B0]  " />
      </div>
      <div className="flex pt-6 flex-col  gap-y-6 justify-center items-center lg:justify-between sm:flex-row">
        <p className=" text-[#B0B0B0] text-md text-center ">
          Copyright 2024, All Rights Reserved
        </p>
        <p className=" hidden lg:block  text-[#B0B0B0] text-md ">
          Terms of Use
        </p>
      </div>
    </section>
  );
}
