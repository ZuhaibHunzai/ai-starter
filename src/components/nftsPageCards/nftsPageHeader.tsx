import Image from "next/image";
import nftLogo from "../../../public/assets/nfts-logo.png";

export default function NftsHeader() {
  return (
    <main>
      <div className="w-full flex flex-col-reverse justify-between md:flex md:flex-row ">
        <div className="flex items-end">
          <div>
            <Image src={nftLogo} width={100} height={100} alt="img" />
          </div>
          <div className="flex flex-col pl-4">
            <div>
              <h1 className="text-white text-[24px] font-[700]">
                Project Name
              </h1>
            </div>
            <div className="flex">
              <div className="py-2">
                <button className="bg-[#313131] rounded-full py-2 px-4 cursor-pointer">
                  Public
                </button>
              </div>
              <div className="p-2">
                <button className="bg-[#313131] rounded-full py-2 px-4 cursor-pointer">
                  AlLayer
                </button>
              </div>
              <div className="p-2">
                <button className="bg-[#313131] rounded-full py-2 px-4 cursor-pointer">
                  Tag3
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 flex justify-end items-end ">
          <button className="text-[18px]  rounded-full py-2 px-4 bg-[#434866] font-[700]">
            Check Whitelist
          </button>
        </div>
      </div>
    </main>
  );
}
