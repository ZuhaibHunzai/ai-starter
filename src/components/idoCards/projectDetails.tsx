import IdoCard from "../idoCard";

export default function ProjectDetails() {
  return (
    <main>
      <IdoCard>
        <h1 className="text-[24px] font-[700]">Project Detail</h1>
        <p className="mt-2 text-[18px] font-[400]">
          Camelot is an innovative project aiming to democratize and
          decentralize the process of AI training using blockchain technology.
          The project endeavors to build a scalable Layer3 DePIN platform within
          Bitcoin ecosystem, allowing individuals and organizations worldwide to
          contribute computational resources to a shared pool. This facilitates
          the training of powerful AI models and distributes training results to
          mobile devices. <br />
          <br />
          Additionally, Camelot introduces a novel concept of AI authentication,
          using unique blockchain identifiers to certify trained AI models,
          ensuring transparency and traceability. This advanced approach
          addresses challenges such as data privacy, trust, and ownership of AI
          models in today&apos;s centralized AI environment.
        </p>
      </IdoCard>
    </main>
  );
}
