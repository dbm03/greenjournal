import { useState } from "react";
import TransportationForm from "./transportation-card";

export interface TransportationFormProps {
  isRegularVehicleMaintenance: boolean;
  setRegularVehicleMaintenance: (value: boolean) => void;
  milesPerWeekVehicle: number;
  setMilesPerWeekVehicle: (value: number) => void;
  milesPerGallon: number;
  setMilesPerGallon: (value: number) => void;
  milesPerWeekPublicTransportation: number;
  setMilesPerWeekPublicTransportation: (value: number) => void;
  flightsPerYear: number;
  setFlightsPerYear: (value: number) => void;
}

export const ManualSettings = () => {
  // ==== Transportation form ====
  const [isRegularVehicleMaintenance, setRegularVehicleMaintenance] =
    useState<boolean>(false);
  const [milesPerWeekVehicle, setMilesPerWeekVehicle] = useState<number>();
  const [milesPerGallon, setMilesPerGallon] = useState<number>();
  const [
    milesPerWeekPublicTransportation,
    setMilesPerWeekPublicTransportation,
  ] = useState<number>();
  const [flightsPerYear, setFlightsPerYear] = useState<number>();

  const handleMilesPerWeekVehicle = (value: number) => {
    if (value >= 0) setMilesPerWeekVehicle(value);
  };

  const handleMilesPerGallon = (value: number) => {
    if (value >= 0) setMilesPerGallon(value);
  };

  const handleMilesPerWeekPublicTransportation = (value: number) => {
    if (value >= 0) setMilesPerWeekPublicTransportation(value);
  };

  const handleFlightsPerYear = (value: number) => {
    if (value >= 0) setFlightsPerYear(value);
  };

  return (
    <div>
      <TransportationForm
        isRegularVehicleMaintenance={isRegularVehicleMaintenance}
        setRegularVehicleMaintenance={setRegularVehicleMaintenance}
        milesPerWeekVehicle={milesPerWeekVehicle}
        setMilesPerWeekVehicle={handleMilesPerWeekVehicle}
        milesPerGallon={milesPerGallon}
        setMilesPerGallon={handleMilesPerGallon}
        milesPerWeekPublicTransportation={milesPerWeekPublicTransportation}
        setMilesPerWeekPublicTransportation={
          handleMilesPerWeekPublicTransportation
        }
        flightsPerYear={flightsPerYear}
        setFlightsPerYear={handleFlightsPerYear}
      />
    </div>
  );
};
