import IdoCard from "../idoCard";

export default function TokenDetails() {
  return (
    <main>
      <IdoCard>
        <h1 className="text-[24px] font-[700]">Token Detail</h1>
        <p className="mt-2 text-[18px] font-[400]">
          Token: <span className="text-[#8395F9] font-[400]">PAIRED</span>
        </p>
        <p className="text-[18px] font-[400]">
          Contract:{" "}
          <span className="text-[#8395F9] font-[400] overflow-hidden">
            0xa7F...382dB
          </span>
        </p>
        <p className="text-[18px] font-[400]">
          Chain: <span className="text-[#8395F9] font-[400]">Ethereum</span>
        </p>
        <p className="text-[18px] font-[400]">
          Total Supply:{" "}
          <span className="text-[#8395F9] font-[400]">1,000,000,000</span>
        </p>
        <p className="text-[18px] font-[400]">
          Initial Supply:{" "}
          <span className="text-[#8395F9] font-[400]">33,000,000</span>
        </p>
        <p className="text-[18px] font-[400]">
          Initial Marketcap:{" "}
          <span className="text-[#8395F9] font-[400]">$792,000</span>
        </p>
        <p className="text-[18px] font-[400]">
          Token Listing: <span className="text-[#8395F9] font-[400]">TBA</span>
        </p>
      </IdoCard>
    </main>
  );
}
