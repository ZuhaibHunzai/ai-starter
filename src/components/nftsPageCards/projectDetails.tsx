import IdoCard from "../idoCard";
import SaleCard from "./saleCard";

export default function ProjectDetailsCard() {
  const Data = [
    {
      text: "Bored Ape Gof NFT",
      btc: "0.0001 BTC 0/40",
      status: "Sold Out",
    },
    {
      text: "Bored Ape Gof NFT - White",
      btc: "0.0001 BTC 8/40",
      status: "Available",
    },
    {
      text: "Bored Ape Gof NFT - Silver",
      btc: "0.0001 BTC 3/40",
      status: "Available",
    },
    {
      text: "Bored Ape Gof NFT - Gold",
      btc: "0.0001 BTC 0/40",
      status: "Available",
    },
    {
      text: "Bored Ape Gof NFT - Level",
      btc: "0.0001 BTC 38/40",
      status: "Sold Out",
    },
  ];
  return (
    <main>
      <IdoCard>
        <h1 className="text-[24px] font-[700]">Project Details</h1>
        <p>
          Building the gaming, social universe of web3. Enter the maze If you
          dare.
        </p>
        <p>Investing Period</p>
        <p className="font-[700]">100% TGE</p>
        <p>Distribution</p>
        <p className="font-[700]">TBA</p>
        <h1 className="pt-4 pb-2 text-xl font-[700]">Inventory</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Data?.map((data) => {
            return (
              <>
                <SaleCard
                  status={data.status}
                  text={data.text}
                  btc={data.btc}
                />
              </>
            );
          })}
        </div>
      </IdoCard>
    </main>
  );
}
