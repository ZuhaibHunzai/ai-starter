import Image from "next/image";

export default function Img() {
  return (
    <main className="h-full">
      <div className="h-full">
        <Image
          src="/assets/detail_project.png"
          width={350}
          height={500}
          alt="img"
          className="rounded-t-2xl md:rounded-lg  w-full h-full object-cover "
        />
      </div>
    </main>
  );
}
