import IdoHeader from "@/components/idoHeader";
import AiStarter from "@/components/idoCards/aiStarter";
import ProjectDetails from "@/components/idoCards/projectDetails";
import TokenDetails from "@/components/idoCards/tokenDetails";
import YourDeposits from "@/components/idoCards/yourDeposits";
import SaleDetails from "@/components/idoCards/saleDetails";
import TokenClaim from "@/components/idoCards/tokenClaim";

export default function Home() {
  return (
    <main>
      <div className="w-full flex flex-col justify-between items-center px-2">
        <div className="max-w-6xl">
          <IdoHeader />
          <div className="hidden md:block">
            <div className="w-full grid grid-cols-2 gap-4 justify-between mt-8">
              <div>
                <div>
                  <AiStarter />
                </div>
                <div className="mb-4">
                  <ProjectDetails />
                </div>
                <div className="mb-4">
                  <TokenDetails />
                </div>
                <div className="mb-4">
                  <YourDeposits />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <SaleDetails />
                </div>
                <div className="mb-4">
                  <TokenClaim />
                </div>
              </div>
            </div>
          </div>
          <div className=" md:hidden">
            {/* small screen */}
            <div className="flex flex-col  ">
              <div>
                <AiStarter />
                <div className="w-full mb-4 flex flex-col justify-center">
                  <div className="w-full mt-4">
                    <SaleDetails />
                  </div>
                  <div className="w-full mt-4">
                    <ProjectDetails />
                  </div>
                  <div className=" w-full mt-4">
                    <TokenDetails />
                  </div>
                  <div className="w-full mt-4">
                    <YourDeposits />
                  </div>
                  <div className="w-full mt-4">
                    <TokenClaim />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
