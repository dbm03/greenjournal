"use client";

import EarthViewCard from "@/components/earthviewcard";
import HistoryGraphCard from "@/components/historygraphcard";
import CarbonFootPrintCard from "@/components/carbonfootprintcard";
import JournalCard from "@/components/journalcard";
import Comparison from "@/components/comparison";
import Tips from "@/components/tips";
import { createContext, useEffect, useState } from "react";
import { mockStorageData } from "@/mocks";

import { TotalMetricTonsContext } from "@/components/metrictonscontext";

const initialData = [
  { time: "2023-12-22", value: 10 },
  { time: "2023-12-23", value: 6 },
  { time: "2023-12-24", value: 12.02 },
  { time: "2023-12-25", value: 15.32 },
  { time: "2023-12-26", value: 10.17 },
  { time: "2023-12-27", value: 7.89 },
  { time: "2023-12-28", value: 16.46 },
  { time: "2023-12-29", value: 14.92 },
  { time: "2023-12-30", value: 15.68 },
  { time: "2023-12-31", value: 5.67 },
];

export default function Home() {
  // mock user storage data

  useEffect(() => {
    if (!localStorage) return;

    localStorage.setItem(
      "currentMetrics",
      JSON.stringify(mockStorageData.currentMetrics)
    );
    localStorage.setItem("logs", JSON.stringify(mockStorageData.logs));
    localStorage.setItem(
      "currentMetricTonsPerYear",
      JSON.stringify(mockStorageData.currentMetricTonsPerYear)
    );
    localStorage.setItem("v1", JSON.stringify(mockStorageData.v1));
    localStorage.setItem("v2", JSON.stringify(mockStorageData.v2));
    localStorage.setItem("v3", JSON.stringify(mockStorageData.v3));
    localStorage.setItem("v4", JSON.stringify(mockStorageData.v4));

    const v1JSON = localStorage?.getItem("v1");
    if (v1JSON !== null) {
      const v1 = JSON.parse(v1JSON);
      setV1(v1);
    }
    const v2JSON = localStorage?.getItem("v2");
    if (v2JSON !== null) {
      const v2 = JSON.parse(v2JSON);
      setV2(v2);
    }
    const v3JSON = localStorage?.getItem("v3");
    if (v3JSON !== null) {
      const v3 = JSON.parse(v3JSON);
      setV3(v3);
    }
    const v4JSON = localStorage?.getItem("v4");
    if (v4JSON !== null) {
      const v4 = JSON.parse(v4JSON);
      setV4(v4);
    }

    const metricTonsJSON = localStorage?.getItem("currentMetricTonsPerYear");
    if (metricTonsJSON !== null) {
      const currentMetricTons = JSON.parse(metricTonsJSON);
      setTotalMetricTons(currentMetricTons);
    }
  }, []);

  const [totalMetricTons, setTotalMetricTons] = useState(0);
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  const [v4, setV4] = useState(0);
  return (
    //  <section className="flex flex-1 flex-grow gap-4">
    //    <div className="flex flex-col flex-1 gap-4">
    //      <div className="flex flex-1 gap-4">
    //        <EarthViewCard />
    //        <div className="flex flex-col flex-1 gap-4">
    //          <div>
    //            <Comparison val1={50} val2={30} val3={70} val4={40} />
    //          </div>
    //          <div>
    //            <CarbonFootPrintCard />
    //          </div>
    //        </div>
    //      </div>
    //      <div>
    //        <HistoryGraphCard data={initialData} />
    //      </div>
    //    </div>
    //    <div className="flex flex-1">
    //      <JournalCard />
    //    </div>
    //  </section>

    <TotalMetricTonsContext.Provider
      value={{
        totalMetricTons,
        setTotalMetricTons,
        v1,
        v2,
        v3,
        v4,
        setV1,
        setV2,
        setV3,
        setV4,
      }}
    >
      <div className="grid grid-cols-10 max-h-[89vh] grid-rows-3 gap-4">
        <div className="col-span-4 row-span-2 ">
          <EarthViewCard />
        </div>
        <div className="col-span-3 row-span-3 ">
          <JournalCard />
        </div>
        <div className="col-span-1 row-span-3 ">
          <Tips />
        </div>
        <div className="col-span-2 col-start-5 row-span-1 row-start-1 ">
          <Comparison
            val1={100 - v1 * 10}
            val2={100 - v2 * 10}
            val3={100 - v3 * 10}
            val4={100 - v4 * 10}
          />
        </div>
        <div className="col-span-2 col-start-5 row-span-1 row-start-2 ">
          <CarbonFootPrintCard />
        </div>
        <div className="col-span-6 row-start-3 ">
          <HistoryGraphCard data={initialData} />
        </div>
      </div>
    </TotalMetricTonsContext.Provider>
  );
}
