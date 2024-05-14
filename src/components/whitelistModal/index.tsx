import React, { CSSProperties } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles.css";
// import { ButtonMintLight } from "../button";

interface DialogProps {
  description: string;
  isOpen: boolean;
  onClose: () => void;
  pending: boolean;
  address: string | undefined;
  walletAddress: string[];
  onMint: () => void;
  maxNumber: number;
  setMaxNumber: (value: number) => void;
  dialogStyle?: CSSProperties;
}

const DialogDemo: React.FC<DialogProps> = ({
  description,
  isOpen,
  onClose,
  pending,
  address,
  walletAddress,
  onMint,
  maxNumber,
  setMaxNumber,
  dialogStyle,
}) => {
  const isWalletConnected = walletAddress.includes(address || "");

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <div style={dialogStyle}>
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">WishList</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              {description}
            </Dialog.Description>

            {!pending && isWalletConnected && (
              <div className="flex gap-3">
                <input
                  type="number"
                  className="bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white"
                  value={maxNumber}
                  onChange={(e) => setMaxNumber(Number(e.target.value))}
                />
                {/* <ButtonMintLight onClick={onMint} /> */}
              </div>
            )}

            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <Dialog.Close asChild>
                <button
                  className="IconButton"
                  aria-label="Close"
                  onClick={onClose}
                >
                  X
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
