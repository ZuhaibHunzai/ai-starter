import Image from "next/image";
import idoCover from "../../../public/assets/camelot1.png";
import { BsTwitterX } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

export default function AiStarter() {
  return (
    <main className="hidden md:block">
      <div className="mb-4 relative">
        <Image
          src={idoCover}
          width={532}
          height={294}
          alt="img"
          className="w-full h-full object-fill"
        />
        <div className="flex items-center absolute top-0 right-0 gap-4 p-2">
          <a
            href=" https://x.com/CamelotLayer3 "
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitterX className="text-xl" />
          </a>
          <TbWorld className="text-2xl" />
        </div>
      </div>
    </main>
  );
}
