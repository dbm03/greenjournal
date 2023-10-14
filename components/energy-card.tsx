import {Input, Checkbox, Spacer, Select, SelectItem, Button} from "@nextui-org/react";

const Card2 = () => {
    return(
      <div className="px-2 py-4 w-full min-w-[375px]">
      <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
          <p className="text-small text-default-500">Natural Gas</p>
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input label="Monthy Usage" className="max-w-[170px]" />
          <Select className="max-w-xs" label="Select units" defaultSelectedKeys={["cubic-feet"]}>
            <SelectItem key="cubic-feet">1000 Cubic Feet</SelectItem>
            <SelectItem key="dollars">Dollars</SelectItem>
          </Select>
          </div>
          <p className="text-small text-default-500">Electricity</p>
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input label="Monthy Usage" className="max-w-[170px]" />
          <Select className="max-w-xs" label="Select units" defaultSelectedKeys={["kilowatt-hours"]}>
            <SelectItem key="kilowatt-hours">Kilowatt-Hours</SelectItem>
            <SelectItem key="dollars">Dollars</SelectItem>
          </Select>
          </div>
          <Checkbox color="success">My household purchases green energy.</Checkbox>
          <Spacer/>
          <p className="text-small text-default-500">Fuel Oil</p>
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input label="Monthy Usage" className="max-w-[170px]" />
          <Select className="max-w-xs" label="Select units" defaultSelectedKeys={["gallons"]}>
            <SelectItem key="gallons">Gallons</SelectItem>
            <SelectItem key="dollars">Dollars</SelectItem>
          </Select>
          </div>
          <p className="text-small text-default-500">Propane</p>
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input label="Monthy Usage" className="max-w-[170px]" />
          <Select className="max-w-xs" label="Select units" defaultSelectedKeys={["gallons"]}>
            <SelectItem key="gallons">Gallons</SelectItem>
            <SelectItem key="dollars">Dollars</SelectItem>
          </Select>
          </div>
          </div>
          <Button color="success">Save Changes</Button>
          </div>
        </div>
    )
}
export default Card2;