import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import cover from "../../public/assets/camelot.png";
type CardProps = {
  ProjecName: string;
  text: string;
  totalRaise: string;
  totalReward: string;
  rate: string;
  deposit: string;
  link: string;
};
// nfts card
export default function Card(props: CardProps) {
  return (
    <section className="flex flex-col card-layout  w-full">
      <Link href={`/ido/camelot/${props.link}`}>
        <Image
          className="card-layout w-full"
          width={400}
          height={250}
          alt="Photo"
          src={cover}
        />
      </Link>
      <div className=" flex flex-col pt-4 pb-6 px-2 card-data-layout  		">
        <Link href={`/ido/camelot/${props.link}`}>
          <div>
            <p className="text-2xl font-bold tracking-wide">
              {props.ProjecName}
            </p>
          </div>
        </Link>

        <div className="flex justify-between flex-wrap gap-y-2 lg:gap-y-0 pt-4 items-center">
          <div className=" flex gap-x-4">
            <button className="tab-button px-8 py-1 text-gray-400">
              Public
            </button>
          </div>
          <div className=" flex  gap-x-4">
            <a href="https://x.com/CamelotLayer3" target="_blank">
              <BsTwitterX className="text-[#cbcacd] text-xl" />
            </a>
            <a href="https://cam3lot.io/" target="_blank">
              <TbWorld className="text-[#cbcacd] text-xl" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold text-[#8395F9] capitalize pt-8">
            {props.text}
          </p>
        </div>
        <Link href={`/ido/camelot/${props.link}`}>
          <div className=" flex flex-col  pt-2">
            <div className="data-card">
              <p className="text-md text-[#B0B0B0] capitalize">Total Raise</p>
              <p className="text-md text-[#B0B0B0] uppercase">
                {props.totalRaise}
              </p>
            </div>
            <div className="data-card">
              <p className="text-md  text-[#CECECE]  capitalize">
                Total Rewards
              </p>
              <p className="text-md  text-[#CECECE] uppercase">
                {props.totalReward}
              </p>
            </div>
            <div className="data-card">
              <p className="text-md text-[#B0B0B0] capitalize">rate</p>
              <p className="text-md text-[#B0B0B0] uppercase">{props.rate}</p>
            </div>
            <div className="data-card">
              <p className="text-md text-[#B0B0B0] capitalize">Deposit</p>
              <p className="text-md text-[#B0B0B0] uppercase">
                {" "}
                {props.deposit}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
