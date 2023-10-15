"use client";
import React, { useEffect } from "react";
import { Accordion, AccordionItem, Selection, Button } from "@nextui-org/react";
import EnergyForm from "@/components/energy-card";

import CSS from "csstype";
import { useState } from "react";
import TransportationForm from "./transportation-card";
import WasteForm from "@/components/waste-card";
import OtherForm from "@/components/other-card";

import { CarIcon } from "./CarIcon.jsx";
import { EnergyIcon } from "./EnergyIcon.jsx";
import { WasteIcon } from "./WasteIcon.jsx";
import { OtherIcon } from "./OtherIcon.jsx";
import { localStorageSchema } from "@/app/page";

import { useContext } from "react";
import { TotalMetricTonsContext } from "@/app/page";

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
  update: () => void;
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
  update: () => void;
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
  update: () => void;
}

export interface EnergyFormProps {
  naturalGas: string;
  setNaturalGas: (value: string) => void;
  naturalGasUnit: Selection;
  setNaturalGasUnit: (value: Selection) => void;
  electricityBill: string;
  setElectricityBill: (value: string) => void;
  electricityBillUnit: Selection;
  setElectricityBillUnit: (value: Selection) => void;
  isGreenEnergyHouse: boolean;
  setIsGreenEnergyHouse: (value: boolean) => void;
  fuelOil: string;
  setFuelOil: (value: string) => void;
  fuelOilUnit: Selection;
  setFuelOilUnit: (value: Selection) => void;
  propane: string;
  setPropane: (value: string) => void;
  propaneUnit: Selection;
  setPropaneUnit: (value: Selection) => void;
  submitForm: () => void;
  update: () => void;
}

export const ManualSettings = () => {
  const {
    totalMetricTons,
    setTotalMetricTons,
    v1,
    setV1,
    v2,
    setV2,
    v3,
    setV3,
    v4,
    setV4,
  } = useContext(TotalMetricTonsContext);
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

  // ==== Energy form state ====
  const [electricityBill, setElectricityBill] = useState<string>("");
  const [electricityBillUnit, setElectricityBillUnit] = useState<Selection>(
    new Set([])
  );
  const [naturalGas, setNaturalGas] = useState<string>("");
  const [naturalGasUnit, setNaturalGasUnit] = useState<Selection>(new Set([]));
  const [fuelOil, setFuelOil] = useState<string>("");
  const [fuelOilUnit, setFuelOilUnit] = useState<Selection>(new Set([]));
  const [propane, setPropane] = useState<string>("");
  const [propaneUnit, setPropaneUnit] = useState<Selection>(new Set([]));
  const [isGreenEnergyHouse, setIsGreenEnergyHouse] = useState<boolean>(false);

  const handleElectricityBill = (value: string) => {
    if (Number(value) >= 0) setElectricityBill(value);
  };

  const handleNaturalGas = (value: string) => {
    if (Number(value) >= 0) setNaturalGas(value);
  };

  const handleFuelOil = (value: string) => {
    if (Number(value) >= 0) setFuelOil(value);
  };

  const handlePropane = (value: string) => {
    if (Number(value) >= 0) setPropane(value);
  };

  const handleEnergySubmit = () => {};
  let energyTotal =
    (12 *
      ((naturalGasUnit.has("dollars") ? 1 / 10.68 : 1) * 119.58 * Number(naturalGas) /1000 +
        (fuelOilUnit.has("dollars") ? 1 / 4.02 : 1) * 22.61 * Number(fuelOil) +
        (propaneUnit.has("gallons") ? 1 / 2.47 : 1) * 12.43 * Number(propane) +
        (((isGreenEnergyHouse ? 0.5 : 1) *
          (electricityBillUnit.has("dollars") ? 1 / 0.1188 : 1)) /
          1000) *
          1238.516 * Number(electricityBill) +
        (((isGreenEnergyHouse ? 0.5 : 0) *
          (electricityBillUnit.has("dollars") ? 1 / 0.1188 : 1)) /
          1000) *
          727.603 * Number(electricityBill))) /
    2204.62;

  // ==== Other form state ====
  const [isVegetarian, setIsVegetarian] = useState<boolean>(false);
  const [lowFlowShowerhead, setLowFlowShowerhead] = useState<boolean>(false);
  const [isVolunteer, setIsVolunteer] = useState<boolean>(false);
  const [shoppingHabits, setShoppingHabits] = useState<Selection>(new Set([]));
  const [isRecycledProducts, setIsRecycledProducts] = useState<boolean>(false);
  const [isOrganicProduce, setIsOrganicProduce] = useState<boolean>(false);

  let otherTotal =
    ((shoppingHabits.has("rarely") ? 200 : 0) +
      (shoppingHabits.has("sometimes") ? 600 : 0) +
      (shoppingHabits.has("often") ? 1000 : 0) -
      (isVegetarian ? 1200 : 0) -
      (lowFlowShowerhead ? 350 : 0) -
      (isVolunteer ? 500 : 0) -
      (isRecycledProducts ? 500 : 0) -
      (isOrganicProduce ? 500 : 0)) /
    2204.62;

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

  let wasteTotal =
    (Number(trashPerWeek) * 52 * 3.02 -
      (recyclesAluminumSteelCans ? 89 : 0) -
      (recyclesPlastic ? 36 : 0) -
      (recyclesGlass ? 25 : 0) -
      (recyclesNewspaper ? 113 : 0) -
      (recyclesMagazines ? 27 : 0)) /
    2204.62;
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

  let transportationTotal =
    ((isRegularVehicleMaintenance ? 191 : 0) +
      (((Number(milesPerWeekVehicle) * 52) / Number(milesPerGallon)) *
        19.6 *
        1.01) /
        (isRegularVehicleMaintenance ? 1 - 0.04 : 1) +
      (Number(milesPerWeekPublicTransportation) * 52 * 14) / 100 +
      Number(flightsPerYear) * 90 * 3) /
    2204.62;

  const calcTotal = () => {
    setV1(transportationTotal);
    setV2(energyTotal);
    setV3(wasteTotal);
    setV4(otherTotal);
    setTotalMetricTons(
      transportationTotal + energyTotal + wasteTotal + otherTotal
    );
  };
  useEffect(() => {
    // get from local storage all state variables

    const json = localStorage?.getItem("currentMetrics") ?? "{}";
    const data: localStorageSchema["currentMetrics"] = JSON.parse(json);
    const energy = data.energy;
    console.log(energy);
    if (energy !== undefined) {
      setElectricityBill(energy.electricityBill);
      setElectricityBillUnit(new Set([energy.electricityBillUnit]));
      setNaturalGas(energy.naturalGas);
      setNaturalGasUnit(new Set([energy.naturalGasUnit]));
      setFuelOil(energy.fuelOil);
      setFuelOilUnit(new Set([energy.fuelOilUnit]));
      setPropane(energy.propane);
      setPropaneUnit(new Set([energy.propaneUnit]));
      setIsGreenEnergyHouse(energy.isGreenEnergyHouse);
    }
    const transportation = data.transportation;
    if (transportation !== undefined) {
      setFlightsPerYear(transportation.flightsPerYear);
      setMilesPerGallon(transportation.milesPerGallon);
      setMilesPerWeekPublicTransportation(
        transportation.milesPerWeekPublicTransportation
      );
      setMilesPerWeekVehicle(transportation.milesPerWeekVehicle);
      setRegularVehicleMaintenance(transportation.isRegularVehicleMaintenance);
    }

    const waste = data.waste;
    if (waste !== undefined) {
      setTrashPerWeek(waste.trashPerWeek);
      setWeightUnit(new Set([waste.weightUnit]));
      setRecyclesAluminumSteelCans(waste.recyclesAluminumSteelCans);
      setRecyclesGlass(waste.recyclesGlass);
      setRecyclesMagazines(waste.recyclesMagazines);
      setRecyclesNewspaper(waste.recyclesNewspaper);
      setRecyclesPlastic(waste.recyclesPlastic);
    }

    const other = data.other;
    if (other !== undefined) {
      setIsVegetarian(other.isVegetarian);
      setIsVolunteer(other.isVolunteer);
      setLowFlowShowerhead(other.lowFlowShowerhead);
      setShoppingHabits(new Set(other.shoppingHabits));
      setIsRecycledProducts(other.isRecycledProducts);
      setIsOrganicProduce(other.isOrganicProduce);
    }

    // set state variables
  }, []);

  return (
    <div>
      <Accordion
        showDivider={false}
        className="flex flex-col w-full p-2"
        isCompact
        fullWidth
        variant="light"
        itemClasses={itemClasses}
        defaultExpandedKeys={["1"]}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  stiffness: 500,
                  damping: 30,
                  duration: 0.3,
                  easings: "ease",
                },
                opacity: {
                  easings: "ease",
                  duration: 0.6,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        <AccordionItem
          key="1"
          aria-label="Transportation"
          startContent={<CarIcon className={(milesPerWeekVehicle !== "" && milesPerGallon !== "" && milesPerWeekPublicTransportation !== "" && flightsPerYear != "") ? "text-success" : ""} />}
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
              update={calcTotal}
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Home Energy"
          startContent={<EnergyIcon className={(electricityBill !== "" && naturalGas !== "" && fuelOil !== "" && propane !== "") ? "text-success" : ""} />}
          subtitle={
            <p className="flex">
              <em>energy efficiency and use</em>
            </p>
          }
          title="Home Energy"
        >
          <div style={innerStyle}>
            {/* ENERGY FORM GOES HERE---------------------------------------------------------------*/}
            <EnergyForm
              naturalGas={naturalGas}
              setNaturalGas={handleNaturalGas}
              naturalGasUnit={naturalGasUnit}
              setNaturalGasUnit={setNaturalGasUnit}
              electricityBill={electricityBill}
              setElectricityBill={handleElectricityBill}
              electricityBillUnit={electricityBillUnit}
              setElectricityBillUnit={setElectricityBillUnit}
              isGreenEnergyHouse={isGreenEnergyHouse}
              setIsGreenEnergyHouse={setIsGreenEnergyHouse}
              fuelOil={fuelOil}
              setFuelOil={handleFuelOil}
              fuelOilUnit={fuelOilUnit}
              setFuelOilUnit={setFuelOilUnit}
              propane={propane}
              setPropane={handlePropane}
              propaneUnit={propaneUnit}
              setPropaneUnit={setPropaneUnit}
              submitForm={handleEnergySubmit}
              update={calcTotal}
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Waste"
          startContent={<WasteIcon className={(trashPerWeek !== "") ? "text-success" : ""} />}
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
              update={calcTotal}
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Other"
          startContent={<OtherIcon className={(shoppingHabits.has("rarely") || shoppingHabits.has("sometimes") || shoppingHabits.has("often")) ? "text-success" : ""} />}
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
              update={calcTotal}
            />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
