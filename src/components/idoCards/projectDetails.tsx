import IdoCard from "../idoCard";

export default function ProjectDetails() {
  return (
    <main>
      <IdoCard>
        <h1 className="text-[24px] font-[700]">Project Detail</h1>
        <p className="mt-2 text-[18px] font-[400]">
          Lorem ipsum dolor sit amet consectetur. Quam duis sed senectus nam
          faucibus. Pulvinar egestas elit sit posuere ultricies enim
          pellentesque. Senectus scelerisque proin viverra porttitor in elit dui
          pharetra. Vitae maecenas habitasse interdum risus vitae.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Quam duis sed senectus nam
          faucibus.
        </p>
        <p className="mt-2 text-[18px] font-[400]">Vesting Period:</p>
        <h2 className="font-[700]">
          20% TGE, then linear monthly release over 4 months
        </h2>
        <p className="text-[18px] font-[400]">Distribution:</p>
        <h2 className="font-[700]">TBA</h2>
      </IdoCard>
    </main>
  );
}
