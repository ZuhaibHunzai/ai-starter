import Image from "next/image";
import img from "../../../public/assets/ido-cover.png";

type CardProps = {
  status: string;
  text: string;
  btc: string;
};

export default function SaleCard(props: CardProps) {
  const { text, btc, status } = props;
  return (
    <main>
      <div className="flex items-center">
        <div>
          <Image
            src={img}
            width={90}
            height={90}
            alt="img"
            className="rounded-tl-lg rounded-bl-lg"
          />
        </div>
        <div className="w-full flex justify-between items-center px-2 border-2 border-white rounded-tr-lg rounded-br-lg">
          <div className="flex flex-col">
            <div>
              <p className="text-xs ">{text}</p>
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
