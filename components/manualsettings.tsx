"use client";
import React from "react";
import { Accordion, AccordionItem, Selection } from "@nextui-org/react";
import Card2 from "@/components/energy-card";
import Card3 from "@/components/waste-card";
import Card4 from "@/components/other-card";
import CSS from "csstype";
import { useState } from "react";
import TransportationForm from "./transportation-card";
import WasteForm from "@/components/waste-card";
import OtherForm from "@/components/other-card";

import {CarIcon} from "./CarIcon.jsx";
import {EnergyIcon} from "./EnergyIcon.jsx";
import {WasteIcon} from "./WasteIcon.jsx";
import {OtherIcon} from "./OtherIcon.jsx";

export interface WasteFormProps {
  trashPerWeek: string;
  setTrashPerWeek: (value: string) => void;
  weightUnit: Selection;
  setWeightUnit: (value: Selection) => void;
  recyclesAluminumSteelCans: boolean;
  setRecyclesAluminumSteelCans: (value: boolean) => void;
  recyclesPlastic: boolean;
  setRecyclesPlastic: (value: boolean) => void;
  recyclesGlass: boolean;
  setRecyclesGlass: (value: boolean) => void;
  recyclesNewspaper: boolean;
  setRecyclesNewspaper: (value: boolean) => void;
  recyclesMagazines: boolean;
  setRecyclesMagazines: (value: boolean) => void;
}
export interface TransportationFormProps {
  isRegularVehicleMaintenance: boolean;
  setRegularVehicleMaintenance: (value: boolean) => void;
  milesPerWeekVehicle: string;
  setMilesPerWeekVehicle: (value: string) => void;
  milesPerGallon: string;
  setMilesPerGallon: (value: string) => void;
  milesPerWeekPublicTransportation: string;
  setMilesPerWeekPublicTransportation: (value: string) => void;
  flightsPerYear: string;
  setFlightsPerYear: (value: string) => void;
}

export interface OtherFormProps {
  isVegetarian: boolean;
  setIsVegetarian: (value: boolean) => void;
  lowFlowShowerhead: boolean;
  setLowFlowShowerhead: (value: boolean) => void;
  isVolunteer: boolean;
  setIsVolunteer: (value: boolean) => void;
  shoppingHabits: Selection;
  setShoppingHabits: (value: Selection) => void;
  isRecycledProducts: boolean;
  setIsRecycledProducts: (value: boolean) => void;
  isOrganicProduce: boolean;
  setIsOrganicProduce: (value: boolean) => void;
}

export const ManualSettings = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const innerStyle: CSS.Properties = {
    overflowY: "scroll",
    height: "290px",
  };

// ==== Output Variables ====
const [totalMetricTons, setTotalMetricTons] = useState<number>(0);
const [transportationTotal, setTransportationTotal] = useState<number>(0);
const [energyTotal, setEnergyTotal] = useState<number>(0);
const [wasteTotal, setWasteTotal] = useState<number>(0);
const [otherTotal, setOtherTotal] = useState<number>(0);

const calcTotal = () => {
  setTotalMetricTons(transportationTotal + energyTotal + wasteTotal + otherTotal);
}

  // ==== Other form state ====
  const [isVegetarian, setIsVegetarian] = useState<boolean>(false);
  const [lowFlowShowerhead, setLowFlowShowerhead] = useState<boolean>(false);
  const [isVolunteer, setIsVolunteer] = useState<boolean>(false);
  const [shoppingHabits, setShoppingHabits] = useState<Selection>(new Set([]));
  const [isRecycledProducts, setIsRecycledProducts] = useState<boolean>(false);
  const [isOrganicProduce, setIsOrganicProduce] = useState<boolean>(false);

  // ==== Waste form state ====
  const [trashPerWeek, setTrashPerWeek] = useState<string>("");
  const [weightUnit, setWeightUnit] = useState<Selection>(new Set([]));
  const [recyclesAluminumSteelCans, setRecyclesAluminumSteelCans] =
    useState<boolean>(false);
  const [recyclesPlastic, setRecyclesPlastic] = useState<boolean>(false);
  const [recyclesGlass, setRecyclesGlass] = useState<boolean>(false);
  const [recyclesNewspaper, setRecyclesNewspaper] = useState<boolean>(false);
  const [recyclesMagazines, setRecyclesMagazines] = useState<boolean>(false);

  const handleTrashPerWeek = (value: string) => {
    if (Number(value) >= 0) setTrashPerWeek(value);
  };

  // ==== Transportation form state ====
  const [isRegularVehicleMaintenance, setRegularVehicleMaintenance] =
    useState<boolean>(false);
  const [milesPerWeekVehicle, setMilesPerWeekVehicle] = useState<string>("");
  const [milesPerGallon, setMilesPerGallon] = useState<string>("");
  const [
    milesPerWeekPublicTransportation,
    setMilesPerWeekPublicTransportation,
  ] = useState<string>("");
  const [flightsPerYear, setFlightsPerYear] = useState<string>("");

  const handleMilesPerWeekVehicle = (value: string) => {
    if (Number(value) >= 0) setMilesPerWeekVehicle(value);
  };

  const handleMilesPerGallon = (value: string) => {
    if (Number(value) >= 0) setMilesPerGallon(value);
  };

  const handleMilesPerWeekPublicTransportation = (value: string) => {
    if (Number(value) >= 0) setMilesPerWeekPublicTransportation(value);
  };

  const handleFlightsPerYear = (value: string) => {
    if (Number(value) >= 0) setFlightsPerYear(value);
  };

  return (
    <div>
      <Accordion
        showDivider={false}
        className="p-2 flex flex-col gap-1 w-full max-w-[450px]"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        isCompact
        variant="shadow"
        itemClasses={itemClasses}
        disableAnimation={true}
        defaultExpandedKeys={["1"]}
      >
        <AccordionItem
          key="1"
          aria-label="Transportation"
          startContent={<CarIcon className="text-success" />}
          subtitle={
            <p className="flex">
              <em>driving and traveling</em>
            </p>
          }
          title="Transportation"
        >
          <div style={innerStyle}>
            {/* TRANSPORTATION FORM GOES HERE---------------------------------------------------------------*/}
            <TransportationForm
              isRegularVehicleMaintenance={isRegularVehicleMaintenance}
              setRegularVehicleMaintenance={setRegularVehicleMaintenance}
              milesPerWeekVehicle={milesPerWeekVehicle}
              setMilesPerWeekVehicle={handleMilesPerWeekVehicle}
              milesPerGallon={milesPerGallon}
              setMilesPerGallon={handleMilesPerGallon}
              milesPerWeekPublicTransportation={
                milesPerWeekPublicTransportation
              }
              setMilesPerWeekPublicTransportation={
                handleMilesPerWeekPublicTransportation
              }
              flightsPerYear={flightsPerYear}
              setFlightsPerYear={handleFlightsPerYear}
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Home Energy"
          startContent={<EnergyIcon className="text-success" />}
          subtitle={
            <p className="flex">
              <em>energy efficiency and use</em>
            </p>
          }
          title="Home Energy"
        >
          <div style={innerStyle}>
            {/* ENERGY FORM GOES HERE---------------------------------------------------------------*/}
            <Card2 />
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Waste"
          startContent={<WasteIcon className="text-success" />}
          subtitle={
            <p className="flex">
              <em>garbage and waste</em>
            </p>
          }
          title="Waste"
        >
          <div style={innerStyle}>
            <WasteForm
              trashPerWeek={trashPerWeek}
              setTrashPerWeek={handleTrashPerWeek}
              weightUnit={weightUnit}
              setWeightUnit={setWeightUnit}
              recyclesAluminumSteelCans={recyclesAluminumSteelCans}
              setRecyclesAluminumSteelCans={setRecyclesAluminumSteelCans}
              recyclesPlastic={recyclesPlastic}
              setRecyclesPlastic={setRecyclesPlastic}
              recyclesGlass={recyclesGlass}
              setRecyclesGlass={setRecyclesGlass}
              recyclesNewspaper={recyclesNewspaper}
              setRecyclesNewspaper={setRecyclesNewspaper}
              recyclesMagazines={recyclesMagazines}
              setRecyclesMagazines={setRecyclesMagazines}
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Other"
          startContent={<OtherIcon className="text-success" />}
          subtitle={
            <p className="flex">
              <em>miscellaneous</em>
            </p>
          }
          title={<p className="flex items-center gap-1">Other</p>}
        >
          <div style={innerStyle}>
            {/* OTHER FORM GOES HERE---------------------------------------------------------------*/}
            <OtherForm
              isVegetarian={isVegetarian}
              setIsVegetarian={setIsVegetarian}
              lowFlowShowerhead={lowFlowShowerhead}
              setLowFlowShowerhead={setLowFlowShowerhead}
              isVolunteer={isVolunteer}
              setIsVolunteer={setIsVolunteer}
              shoppingHabits={shoppingHabits}
              setShoppingHabits={setShoppingHabits}
              isRecycledProducts={isRecycledProducts}
              setIsRecycledProducts={setIsRecycledProducts}
              isOrganicProduce={isOrganicProduce}
              setIsOrganicProduce={setIsOrganicProduce}
            />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
