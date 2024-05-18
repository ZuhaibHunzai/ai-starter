"use client";
import { useState, useTransition } from "react";
import { fetchGoogleSheetData } from "../../../src/actions/fetchGoogleSheetApi";
import { useAccount } from "wagmi";
import DialogDemo from "@/components/whitelistModal/index";
import allLayer from "../../../public/assets/allayer-icon.png";

// type FetchProps = {
//   isModalOpen: boolean;
//   closeModal: () => void;
//   openModal: () => void;
// };
import Image from "next/image";
import nftLogo from "../../../public/assets/logo_new.png";

export default function NftsHeader() {
  const [isPending, startTransition] = useTransition();
  const [walletAddress, setWalletAddress] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { address } = useAccount();
  // const address = "0xeD20f03f71394001596277f0D00Be8A9331eCFCd";

  function handleFetchData() {
    // props.openModal();
    setIsLoading(true);

    // First fetch operation with columnLetter "A"
    startTransition(() => {
      fetchGoogleSheetData("A")
        .then((data) => {
          setWalletAddress(data?.columnData || []);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch data for column A:", error);
          setIsLoading(false);
        });
    });
  }

  const onMint = () => {
    // props.closeModal();
  };

  let description;

  if (!address) {
    description = "Connect your Wallet";
  } else if (isLoading) {
    description = "Loading...";
  } else if (walletAddress.includes(address)) {
    description = `<h1>You are <span style="color:#8395F9">White Listed</span/></h1>`;
  } else {
    description = `<h1>Wallet Address is <span style="color:red">Not</span/> White Listed</h1>`;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
    handleFetchData();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
                Camelot Protocol
              </h1>
            </div>
            <div className="flex gap-x-4 ">
              <div className="">
                <button className="bg-[#313131] rounded-full py-2 px-6 cursor-pointer">
                  Public
                </button>
              </div>
              <div className="">
                <button className="bg-[#313131] rounded-full py-1 pr-4 cursor-pointer flex gap-x-2 items-center ">
                  <div className="flex justify-start">
                    <Image src={allLayer} alt="alllayer-icon" />
                  </div>
                  <p>AILayer</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 flex justify-end items-end ">
          <button
            className="text-[18px] cursor-pointer rounded-full py-2 px-4 bg-[#434866] font-[700]"
            onClick={openModal}
          >
            Check Whitelist
          </button>
        </div>
      </div>
      <DialogDemo
        description={description}
        isOpen={isModalOpen}
        onClose={closeModal}
        pending={isLoading}
        address={address}
        walletAddress={walletAddress}
        onMint={onMint}
      />
    </main>
  );
}
