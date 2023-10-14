import {
  Input,
  Checkbox,
  Spacer,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import { EnergyFormProps } from "./manualsettings";

const EnergyForm = ({
  isGreenEnergyHouse,
  setIsGreenEnergyHouse,
  naturalGas,
  setNaturalGas,
  naturalGasUnit,
  setNaturalGasUnit,
  electricityBill,
  setElectricityBill,
  electricityBillUnit,
  setElectricityBillUnit,
  fuelOil,
  setFuelOil,
  fuelOilUnit,
  setFuelOilUnit,
  propane,
  setPropane,
  propaneUnit,
  setPropaneUnit,
  submitForm,
}: EnergyFormProps) => {
  return (
    <div className="px-2 py-4 w-full min-w-[375px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-small text-default-500">Natural Gas</p>
          <div className="flex flex-wrap items-end w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
            <Input
              label="Monthy Usage"
              className="max-w-[170px]"
              type="number"
              value={naturalGas}
              onValueChange={setNaturalGas}
            />
            <Select
              className="max-w-xs"
              label="Select units"
              defaultSelectedKeys={["cubic-feet"]}
              selectedKeys={naturalGasUnit}
              onSelectionChange={setNaturalGasUnit}
            >
              <SelectItem key="cubic-feet">1000 Cubic Feet</SelectItem>
              <SelectItem key="dollars">Dollars</SelectItem>
            </Select>
          </div>
          <p className="text-small text-default-500">Electricity</p>
          <div className="flex flex-wrap items-end w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
            <Input
              label="Monthy Usage"
              className="max-w-[170px]"
              type="number"
              value={electricityBill}
              onValueChange={setElectricityBill}
            />
            <Select
              className="max-w-xs"
              label="Select units"
              defaultSelectedKeys={["kilowatt-hours"]}
              selectedKeys={electricityBillUnit}
              onSelectionChange={setElectricityBillUnit}
            >
              <SelectItem key="kilowatt-hours">Kilowatt-Hours</SelectItem>
              <SelectItem key="dollars">Dollars</SelectItem>
            </Select>
          </div>
          <Checkbox
            color="success"
            isSelected={isGreenEnergyHouse}
            onValueChange={setIsGreenEnergyHouse}
          >
            My household purchases green energy.
          </Checkbox>
          <Spacer />
          <p className="text-small text-default-500">Fuel Oil</p>
          <div className="flex flex-wrap items-end w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
            <Input
              label="Monthy Usage"
              className="max-w-[170px]"
              type="number"
              value={fuelOil}
              onValueChange={setFuelOil}
            />
            <Select
              className="max-w-xs"
              label="Select units"
              defaultSelectedKeys={["gallons"]}
              selectedKeys={fuelOilUnit}
              onSelectionChange={setFuelOilUnit}
            >
              <SelectItem key="gallons">Gallons</SelectItem>
              <SelectItem key="dollars">Dollars</SelectItem>
            </Select>
          </div>
          <p className="text-small text-default-500">Propane</p>
          <div className="flex flex-wrap items-end w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
            <Input
              label="Monthy Usage"
              type="number"
              className="max-w-[170px]"
              value={propane}
              onValueChange={setPropane}
            />
            <Select
              className="max-w-xs"
              label="Select units"
              defaultSelectedKeys={["gallons"]}
              selectedKeys={propaneUnit}
              onSelectionChange={setPropaneUnit}
            >
              <SelectItem key="gallons">Gallons</SelectItem>
              <SelectItem key="dollars">Dollars</SelectItem>
            </Select>
          </div>
        </div>
        <Button color="success" onSubmit={submitForm}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};
export default EnergyForm;
