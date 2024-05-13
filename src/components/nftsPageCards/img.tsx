import Image from "next/image";
import img from "../../../public/assets/ido-cover.png";

export default function Img() {
  return (
    <main className="h-full">
      <div className="h-full">
        <Image
          src={img}
          width={350}
          height={500}
          alt="img"
          className="rounded-t-2xl md:rounded-lg  w-full h-full object-fill "
        />
      </div>
    </main>
  );
}
