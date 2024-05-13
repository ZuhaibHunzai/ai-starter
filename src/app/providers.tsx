"use client";

import React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";

import {
  tokenPocketWallet,
  bitgetWallet,
  okxWallet,
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  gateWallet,
  // gateWallet,
} from "@rainbow-me/rainbowkit/wallets";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";

import { createConfig } from "wagmi";
import { mainnet } from "viem/chains";

const projectId = "7e778a0cc9adc4e4434bf73bff51f07c";

const { wallets } = getDefaultWallets({
  appName: "AIStarter",
  projectId,
});

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        tokenPocketWallet,
        bitgetWallet,
        okxWallet,
        rainbowWallet,
        walletConnectWallet,
        metaMaskWallet,
        gateWallet,
      ],
    },
  ],
  {
    appName: "AIStarter",
    projectId: projectId,
  }
);

export const config = createConfig({
  connectors,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

const queryClient = new QueryClient();

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export { Providers };
