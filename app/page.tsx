"use client";

import EarthViewCard from "@/components/earthviewcard";
import HistoryGraphCard from "@/components/historygraphcard";
import CarbonFootPrintCard from "@/components/carbonfootprintcard";
import JournalCard from "@/components/journalcard";
import Comparison from "@/components/comparison";
import Tips from "@/components/tips";
import { createContext, useEffect, useState } from "react";

export const TotalMetricTonsContext = createContext({
  totalMetricTons: 0,
  setTotalMetricTons: (value: number) => {},
});

const initialData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
];

export default function Home() {
  // mock user storage data

  useEffect(() => {
    localStorage.setItem(
      "currentMetrics",
      JSON.stringify(mockStorageData.currentMetrics)
    );
    localStorage.setItem("logs", JSON.stringify(mockStorageData.logs));
    localStorage.setItem(
      "currentMetricTonsPerYear",
      JSON.stringify(mockStorageData.currentMetricTonsPerYear)
    );
  }, []);

  const [totalMetricTons, setTotalMetricTons] = useState(() => {
    // get from local storage totalmetrictons if saved
    const saved = localStorage?.getItem("currentMetricTonsPerYear");
    if (saved === null) {
      return 0;
    }
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

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
      value={{ totalMetricTons, setTotalMetricTons }}
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
          <Comparison val1={50} val2={30} val3={70} val4={40} />
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

export type localStorageSchema = typeof mockStorageData;

export const mockStorageData = {
  logs: [
    {
      time: "2023-10-01",
      value: 10,
    },
    {
      time: "2023-10-02",
      value: 9.5,
    },
    {
      time: "2023-10-03",
      value: 9.8,
    },
    {
      time: "2023-10-04",
      value: 10.2,
    },
    {
      time: "2023-10-05",
      value: 10.1,
    },
    {
      time: "2023-10-06",
      value: 9.7,
    },
    {
      time: "2023-10-07",
      value: 9.9,
    },
  ],
  currentMetricTonsPerYear: 10,
  currentMetrics: {
    waste: {
      trashPerWeek: "5",
      weightUnit: "pounds",
      recyclesAluminumSteelCans: true,
      recyclesPlastic: false,
      recyclesGlass: true,
      recyclesNewspaper: true,
      recyclesMagazines: false,
    },
    transportation: {
      isRegularVehicleMaintenance: true,
      milesPerWeekVehicle: "200",
      milesPerGallon: "30",
      milesPerWeekPublicTransportation: "50",
      flightsPerYear: "2",
    },
    other: {
      isVegetarian: true,
      lowFlowShowerhead: true,
      isVolunteer: true,
      shoppingHabits: "sometimes",
      isRecycledProducts: true,
      isOrganicProduce: false,
    },
    energy: {
      naturalGas: "1000",
      naturalGasUnit: "cubic-feet",
      electricityBill: "80",
      electricityBillUnit: "kilowatt-hours",
      isGreenEnergyHouse: true,
      fuelOil: "0",
      fuelOilUnit: "gallons",
      propane: "0",
      propaneUnit: "gallons",
    },
  },
};
