"use client";
import { useState, useTransition } from "react";
import { fetchGoogleSheetData } from "@/actions/fetchGoogleSheetApi";
import { useAccount } from "wagmi";
import DialogDemo from "@/components/whitelistModal/index";
import Image from "next/image";
import idoLogo from "../../public/assets/ido-logo.png";

export default function IdoHeader() {
  const [isPending, startTransition] = useTransition();
  const [walletAddress, setWalletAddress] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { address } = useAccount();
  // const address = "0xeD20f03f71394001596277f0D00Be8A9331eCFCd";

  function handleFetchData() {
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
    description = "Mint is available";
  } else {
    description = "Wallet Address is not White Listed";
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
            <Image src={idoLogo} width={100} height={100} alt="img" />
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
          <button
            className="text-[18px]  rounded-full py-2 px-4 bg-[#434866] font-[700] cursor-pointer"
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
