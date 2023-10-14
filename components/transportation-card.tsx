import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Checkbox,
  Spacer,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import { TransportationFormProps } from "./manualsettings";

const TransportationForm = ({
  isRegularVehicleMaintenance,
  setRegularVehicleMaintenance,
  milesPerWeekVehicle,
  setMilesPerWeekVehicle,
  milesPerGallon,
  setMilesPerGallon,
  milesPerWeekPublicTransportation,
  setMilesPerWeekPublicTransportation,
  flightsPerYear,
  setFlightsPerYear,
}: TransportationFormProps) => {
  return (
    <div className="px-2 py-4 w-full  min-w-[375px]">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-medium text-foreground">Transportation</p>
        <Divider />
        <div className="flex flex-col gap-2">
          <p className="text-small text-default-500">Vehicles</p>
          <div className="flex flex-wrap items-end w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
            <Input
              label="Miles/Week"
              type="number"
              className="max-w-[170px]"
              value={milesPerWeekVehicle}
              onChange={(e) => setMilesPerWeekVehicle(e.target.value)}
            />
            <Input
              label="Miles/Gallon"
              type="number"
              className="max-w-[170px]"
              value={milesPerGallon}
              onChange={(e) => setMilesPerGallon(e.target.value)}
            />
          </div>
          <Checkbox
            isSelected={isRegularVehicleMaintenance}
            onValueChange={setRegularVehicleMaintenance}
          >
            I regularly maintain my vehicles.
          </Checkbox>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-end w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
            <div className="flex flex-col gap-2">
              <p className="text-small text-default-500">
                Public Transportation
              </p>
              <Input
                label="Miles/Week"
                type="number"
                value={milesPerWeekPublicTransportation}
                onChange={(e) =>
                  setMilesPerWeekPublicTransportation(e.target.value)
                }
                className="max-w-[170px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-small text-default-500">Airline Flights</p>
              <Input
                label="Flights/Year"
                type="number"
                value={flightsPerYear}
                onChange={(e) => setFlightsPerYear(e.target.value)}
                className="max-w-[170px]"
              />
            </div>
          </div>
        </div>
        <Button color="primary">Save Changes</Button>
      </div>
    </div>
  );
};
export default TransportationForm;
