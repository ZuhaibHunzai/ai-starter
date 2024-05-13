import Image from "next/image";
import idoCover from "../../../public/assets/ido-cover.png";

export default function AiStarter() {
  return (
    <main className="hidden md:block">
      <div className="mb-4">
        <Image
          src={idoCover}
          width={532}
          height={294}
          alt="img"
          className="w-full h-full object-fill"
        />
      </div>
    </main>
  );
}
