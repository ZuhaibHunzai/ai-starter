import Image from "next/image";

type CardProps = {
  status: string;
  text: string;
  btc: string;
};

export default function SaleCard(props: CardProps) {
  const { text, btc, status } = props;
  return (
    <main>
      <div className="flex items-center w-full h-full">
        <div className="h-14 w-14">
          <Image
            src="/assets/ido_cover_latest.png"
            alt="img"
            width={90}
            height={90}
            className="rounded-tl-lg rounded-bl-lg h-full w-full object-fill"
          />
        </div>
        <div className="w-full flex justify-between items-center py-2 px-2 border border-gray-400 rounded-tr-lg rounded-br-lg">
          <div className="flex flex-col">
            <div>
              <p className="text-xs">{text}</p>
            </div>
            <div>
              <p className="text-sm  ">{btc}</p>
            </div>
          </div>
          <div>
            <p
              style={{
                color: status === "Available" ? "#83F9B2" : "#F98383",
              }}
              className="text-xs"
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
