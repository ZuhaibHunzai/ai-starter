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
