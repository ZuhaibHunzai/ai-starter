import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
type CardProps = {
  ProjecName: string;
  text: string;
  totalRaise: string;
  totalReward: string;
  rate: string;
  deposit: string;
};
// nfts card
export default function Card(props: CardProps) {
  return (
    <section className="flex flex-col card-layout  w-full">
      <Link href="/nft">
        <Image
          className="card-layout w-full"
          width={400}
          height={250}
          alt="Photo"
          src={"/assets/CoverCard.png"}
        />
      </Link>
      <div className=" flex flex-col pt-4 pb-6 px-2 card-data-layout  		">
        <Link href="/nft">
          <div>
            <p className="text-2xl font-bold tracking-wide">
              {props.ProjecName}
            </p>
          </div>
        </Link>

        <div className="flex justify-between flex-wrap gap-y-2 lg:gap-y-0 pt-4 items-center">
          <div className=" flex gap-x-4">
            <button className="tab-button px-8 py-1">Public</button>
            <button className="tab-button px-8 py-1">Public</button>
          </div>
          <div className=" flex  gap-x-4">
            <a href="https://twitter.com/AIStarter_xyz" target="_blank">
              <BsTwitterX className="text-[#cbcacd] text-xl" />
            </a>
            <a href="https://twitter.com/AIStarter_xyz" target="_blank">
              <TbWorld className="text-[#cbcacd] text-xl" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold text-[#8395F9] capitalize pt-8">
            {props.text}
          </p>
        </div>
        <Link href="/nft">
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
                {props.totalReward} PAIRED
              </p>
            </div>
            <div className="data-card">
              <p className="text-md text-[#B0B0B0] capitalize">rate</p>
              <p className="text-md text-[#B0B0B0] uppercase">
                1 PAIRED = {props.rate} USDT
              </p>
            </div>
            <div className="data-card">
              <p className="text-md text-[#B0B0B0] capitalize">Deposit</p>
              <p className="text-md text-[#B0B0B0] uppercase">
                {" "}
                {props.deposit}USDT
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
