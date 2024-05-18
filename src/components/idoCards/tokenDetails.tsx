import IdoCard from "../idoCard";

export default function TokenDetails() {
  return (
    <main>
      <IdoCard>
        <h1 className="text-[24px] font-[700]">Token Detail</h1>
        <p className="mt-2 text-[18px] font-[400]">
          Token Ticker: <span className="text-[#8395F9] font-[400]">CLOT</span>
        </p>
        <p className="text-[18px] font-[400]">
          CToken Contract:{" "}
          <span className="text-[#8395F9] font-[400] overflow-hidden">TBD</span>
        </p>
        <p className="text-[18px] font-[400]">
          Token on Chain:{" "}
          <span className="text-[#8395F9] font-[400]">AILayer</span>
        </p>
        <p className="text-[18px] font-[400]">
          Total Supply:{" "}
          <span className="text-[#8395F9] font-[400]">1 Billion</span>
        </p>
        <p className="text-[18px] font-[400]">
          Initial Supply:{" "}
          <span className="text-[#8395F9] font-[400]">10,000,000</span>
        </p>
        <p className="text-[18px] font-[400]">
          Initial Circulating Supply:{" "}
          <span className="text-[#8395F9] font-[400]">10,000,000</span>
        </p>
        <p className="text-[18px] font-[400]">
          Initial Marketcap:{" "}
          <span className="text-[#8395F9] font-[400]"> $500,000</span>
        </p>

        <p className="text-[18px] font-[400]">
          FDV: <span className="text-[#8395F9] font-[400]"> $50,000,000</span>
        </p>

        <p className="text-[18px] font-[400]">
          Token Listing{" "}
          <span className="text-[#8395F9] font-[400]">
            {" "}
            Kucoin, Bybit, Gate.io, Bitget, MEXC
          </span>
        </p>

        <p className="text-[18px] font-[400]">
          Token Unlocks{" "}
          <span className="text-[#8395F9] font-[400]">
            {" "}
            20% unlock on TGE, 30 days cliff and then 360 days linear vesting
          </span>
        </p>

        <p className="text-[18px] font-[400]">
          Token Claim Start{" "}
          <span className="text-[#8395F9] font-[400]"> TBD</span>
        </p>
      </IdoCard>
    </main>
  );
}
