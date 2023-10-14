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
import { WasteFormProps } from "./manualsettings";

const WasteForm = ({
  trashPerWeek,
  setTrashPerWeek,
  weightUnit,
  setWeightUnit,
  recyclesAluminumSteelCans,
  setRecyclesAluminumSteelCans,
  recyclesPlastic,
  setRecyclesPlastic,
  recyclesGlass,
  setRecyclesGlass,
  recyclesNewspaper,
  setRecyclesNewspaper,
  recyclesMagazines,
  setRecyclesMagazines,
}: WasteFormProps) => {
  return (
    <div className="px-2 py-4 w-full  min-w-[375px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Divider />
          <p className="text-small text-default-500"></p>
          <div className="flex flex-wrap items-end w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
            <Input
              label="Trash/Week"
              className="max-w-[170px]"
              type="number"
              value={trashPerWeek}
              onValueChange={setTrashPerWeek}
            />
            <Select
              className="max-w-xs"
              label="Select units"
              defaultSelectedKeys={["pounds"]}
              selectedKeys={weightUnit}
              onSelectionChange={setWeightUnit}
            >
              <SelectItem key="pounds">Pounds</SelectItem>
              <SelectItem key="kilograms">Kilograms</SelectItem>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-small text-default-500">
            My household recycles...
          </p>
          <Checkbox
            isSelected={recyclesAluminumSteelCans}
            onValueChange={setRecyclesAluminumSteelCans}
            color="success"
          >
            Aluminum/steel cans
          </Checkbox>
          <Checkbox
            isSelected={recyclesPlastic}
            onValueChange={setRecyclesPlastic}
            color="success"
          >
            Plastic
          </Checkbox>
          <Checkbox 
          isSelected={recyclesGlass} 
          onValueChange={setRecyclesGlass} 
          color="success">
            Glass
          </Checkbox>
          <Checkbox
            isSelected={recyclesNewspaper}
            onValueChange={setRecyclesNewspaper}
            color="success"
          >
            Newspaper
          </Checkbox>
          <Checkbox
            isSelected={recyclesMagazines}
            onValueChange={setRecyclesMagazines}
            color="success"
          >
            Magazines
          </Checkbox>
        </div>
        <Button color="success">Save Changes</Button>
      </div>
    </div>
  );
};
export default WasteForm;
