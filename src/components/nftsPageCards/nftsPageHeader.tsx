"use client";
import { useState, useTransition } from "react";
import { fetchGoogleSheetData } from "../../../src/actions/fetchGoogleSheetApi";
import { useAccount } from "wagmi";
import DialogDemo from "@/components/whitelistModal/index";

// type FetchProps = {
//   isModalOpen: boolean;
//   closeModal: () => void;
//   openModal: () => void;
// };
import Image from "next/image";
import nftLogo from "../../../public/assets/nfts-logo.png";

export default function NftsHeader() {
  const [isPending, startTransition] = useTransition();
  const [walletAddress, setWalletAddress] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [maxNumber, setMaxNumber] = useState<number>(0);
  const { address } = useAccount();

  function handleFetchData() {
    // props.openModal();
    setIsLoading(true);

    // First fetch operation with columnLetter "A"
    startTransition(() => {
      fetchGoogleSheetData("A")
        .then((data) => {
          setWalletAddress(data?.columnData || []);
          setIsLoading(false);

          // Check if the current address is available in walletAddress
          if (data?.columnData && data.columnData.includes(address)) {
            // Second fetch operation with columnLetter "B"
            startTransition(() => {
              fetchGoogleSheetData("B")
                .then((dataB) => {
                  setMaxNumber(dataB?.maxNumber || 0);
                  setIsLoading(false);
                })
                .catch((error) => {
                  console.error("Failed to fetch data for column B:", error);
                  setIsLoading(false);
                });
            });
          }
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
  } else if (
    walletAddress.includes("0x04eaC2762F4C8C6a3ec8f7c225c72bC4D0FbcB79")
  ) {
    description = "Mint is available";
  } else {
    description = "Wallet Address is not White Listed";
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
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
        address="0x04eaC2762F4C8C6a3ec8f7c225c72bC4D0FbcB79"
        walletAddress={walletAddress}
        onMint={onMint}
        maxNumber={maxNumber}
        setMaxNumber={setMaxNumber}
      />
    </main>
  );
}
