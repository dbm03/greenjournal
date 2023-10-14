import {Card, CardHeader, CardBody, CardFooter, Divider, Input, Checkbox, Spacer, Select, SelectItem, Button} from "@nextui-org/react";

const Card3 = () => {
    return(
        <div className="px-2 py-4 w-full  min-w-[375px]">
            <div className="flex flex-col gap-4">
            <p className="text-medium font-bold text-foreground">
              Waste
              </p>
	  <div className="flex flex-col gap-2">
	  <Divider/>
	  <p className="text-small text-default-500"></p>
	  <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
	  <Input label="Trash/Week" className="max-w-[170px]" />
	  <Select className="max-w-xs" label="Select units" defaultSelectedKeys={["pounds"]}>
		<SelectItem key="pounds">Pounds</SelectItem>
		<SelectItem key="kilograms">Kilograms</SelectItem>
	  </Select>
	  </div>
	  </div>
	  <div className="flex flex-col gap-2">
	  <p className="text-small text-default-500">My household recycles...</p>
	  <Checkbox>Aluminum/steel cans</Checkbox>
	  <Checkbox>Plastic</Checkbox>
	  <Checkbox>Glass</Checkbox>
	  <Checkbox>Newspaper</Checkbox>
	  <Checkbox>Magazines</Checkbox>
	</div>
	<Button color="primary">Save Changes</Button>
	</div>
	  </div>
    )
}
export default Card3;