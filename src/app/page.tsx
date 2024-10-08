import React from "react";
import CostCard from "@/components/nftsPageCards/costCard";
import Img from "@/components/nftsPageCards/img";
import NftsHeader from "@/components/nftsPageCards/nftsPageHeader";
import ProjectDetailsCard from "@/components/nftsPageCards/projectDetails";
import NftsSaleDetailsCard from "@/components/nftsSaleDEtailsCard";

export default function Home() {
  return (
    <section className="w-full flex justify-center items-center px-2">
      <div className="hidden md:block max-w-6xl">
        <NftsHeader />
        <div className="w-full grid grid-cols-7 gap-4 justify-between mt-8">
          <div className="col-span-4 grid gap-4 ">
            <div className="flex gap-x-10">
              <div className="w-56 h-56">
                <Img />
              </div>
              <div className="h-56">
                <CostCard />
              </div>
            </div>
            <div className="">
              <ProjectDetailsCard />
            </div>
          </div>
          <div className="col-span-3">
            <div>
              <NftsSaleDetailsCard />
            </div>
            <div className="bg-[#2A2B32] p-5 rounded-lg mt-4">
              <h1 className="text-[24px] font-[700]">
                Your Deposited:{" "}
                <span className="text-[#8395F9]">0.1234567890 BTC</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden p-2">
        <NftsHeader />
        <div className="grid grid-cols-1 mt-4">
          <div className="w-full h-96">
            <Img />
          </div>
          <NftsSaleDetailsCard />
          <div className="py-6">
            <CostCard />
          </div>

          <ProjectDetailsCard />
          <div className="bg-[#2A2B32] p-5 rounded-lg mt-4">
            <h1 className="text-[24px] font-[700]">
              Your Deposited:{" "}
              <span className="text-[#8395F9]">0.1234567890 BTC</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
