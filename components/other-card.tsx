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
import { OtherFormProps } from "./manualsettings";

const OtherForm = ({
  isRecycledProducts,
  setIsRecycledProducts,
  isVolunteer,
  setIsVolunteer,
  lowFlowShowerhead,
  setLowFlowShowerhead,
  isVegetarian,
  setIsVegetarian,
  shoppingHabits,
  setShoppingHabits,
  isOrganicProduce,
  setIsOrganicProduce,
}: OtherFormProps) => {
  return (
    <div className="px-2 py-4 w-full min-w-[375px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-small text-default-500">Lifestyle</p>
          <Checkbox color="success">I am vegetarian.</Checkbox>
          <Checkbox color="success">I use a low flow showerhead.</Checkbox>
          <Checkbox color="success">I volunteer for environmental projects.</Checkbox>
          <p className="text-small text-default-500">
            <em>(i.e. conservation efforts, planting trees)</em>
          </p>
          <Spacer />
          <p className="text-small text-default-500">Shopping Habits</p>
          <Select
            className="max-w-xs"
            label="I shop for non-essential products..."
            defaultSelectedKeys={["sometimes"]}
          >
            <SelectItem key="rarely">Rarely</SelectItem>
            <SelectItem key="sometimes">Sometimes</SelectItem>
            <SelectItem key="often">Often</SelectItem>
          </Select>
          <Checkbox color="success">I frequently buy recycled/reused products.</Checkbox>
          <Checkbox color="success">I buy organic, locally-sourced produce.</Checkbox>
          <Spacer />
        </div>
        <Button color="success">Save Changes</Button>
      </div>
    </div>
  );
};
export default OtherForm;
