"use client";
import React from "react";
import Card from "@/components/card";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <ul
            className="flex  mb-0 list-none pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              className={
                "-mb-px px-5 last:mr-0 flex-auto text-center " +
                (openTab === 1 ? "tab-active" : "")
              }
            >
              <a
                className="text-lg font-bold uppercase px-3 py-3 block leading-normal"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                href="#link1"
                role="tablist"
              >
                Active [0]
              </a>
            </li>
            <li
              className={
                "-mb-px last:mr-0 flex-auto text-center " +
                (openTab === 2 ? "tab-active" : "")
              }
            >
              <a
                className="text-lg font-bold uppercase px-3 py-3 block leading-normal"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                href="#link2"
                role="tablist"
              >
                UPCOMING [20]
              </a>
            </li>
            <li
              className={
                "-mb-px  last:mr-0 flex-auto text-center " +
                (openTab === 3 ? "tab-active" : "")
              }
            >
              <a
                className="text-lg font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                href="#link3"
                role="tablist"
              >
                COMPLETED [999]
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words text-white w-full mb-6  ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className=" grid flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Data.map(
                      (
                        {
                          ProjecName,
                          text,
                          totalRaise,
                          totalReward,
                          rate,
                          deposit,
                        },
                        i
                      ) => {
                        return (
                          <Card
                            key={i}
                            ProjecName={ProjecName}
                            text={text}
                            totalRaise={totalRaise}
                            totalReward={totalReward}
                            rate={rate}
                            deposit={deposit}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className=" grid flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Data.map(
                      (
                        {
                          ProjecName,
                          text,
                          totalRaise,
                          totalReward,
                          rate,
                          deposit,
                        },
                        i
                      ) => {
                        return (
                          <Card
                            key={i}
                            ProjecName={ProjecName}
                            text={text}
                            totalRaise={totalRaise}
                            totalReward={totalReward}
                            rate={rate}
                            deposit={deposit}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className=" grid flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Data.map(
                      (
                        {
                          ProjecName,
                          text,
                          totalRaise,
                          totalReward,
                          rate,
                          deposit,
                        },
                        i
                      ) => {
                        return (
                          <Card
                            key={i}
                            ProjecName={ProjecName}
                            text={text}
                            totalRaise={totalRaise}
                            totalReward={totalReward}
                            rate={rate}
                            deposit={deposit}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
const Data = [
  {
    ProjecName: " Project Name",
    text: "Start at May 03, 2024 11:00 UTC",
    totalRaise: "25000",
    totalReward: "1041667",
    rate: "0,0024",
    deposit: "",
  },
  {
    ProjecName: " Project Name",
    text: "Start at May 03, 2024 11:00 UTC",
    totalRaise: "25000",
    totalReward: "1041667",
    rate: "0,0024",
    deposit: "",
  },
  {
    ProjecName: " Project Name",
    text: "Start at May 03, 2024 11:00 UTC",
    totalRaise: "25000",
    totalReward: "1041667",
    rate: "0,0024",
    deposit: "",
  },
  {
    ProjecName: " Project Name",
    text: "Start at May 03, 2024 11:00 UTC",
    totalRaise: "25000",
    totalReward: "1041667",
    rate: "0,0024",
    deposit: "",
  },
  {
    ProjecName: " Project Name",
    text: "Start at May 03, 2024 11:00 UTC",
    totalRaise: "25000",
    totalReward: "1041667",
    rate: "0,0024",
    deposit: "",
  },
];
