import Image from "next/image";
import React from "react";
type CardProps = {
  status: string;
  text: string;
  btc: string;
};
export default function InventryCard(props: CardProps) {
  return (
    <div className="flex pt-5">
      <Image
        className="rounded-[5px 0px 0px 5px] w-2/12  lg:w-20 lg:h-22"
        width={200}
        height={250}
        alt="Photo"
        src={"/assets/CoverCard.png"}
      />
      <div className="inventory-card  w-full flex justify-between items-center px-2 md:gap-x-10">
        <div>
          <p>{props.text}</p>
          <p>0.0001 BTC | {props.btc}</p>
        </div>
        <div>
          {(() => {
            switch (props.status) {
              case "available":
                return (
                  <>
                    {" "}
                    <div className="text-green-300">
                      <p> Available</p>
                    </div>
                  </>
                );
              case "Sold":
                return (
                  <div className="text-red-400">
                    <p> Sold</p>
                  </div>
                );

              default:
                return <></>;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
