import {Card, CardHeader, CardBody, CardFooter, Divider, Input, Checkbox, Spacer, Select, SelectItem} from "@nextui-org/react";

const Card2 = () => {
    return(
        <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
            <div className="flex flex-col">
            <Spacer x={4} />
              <p className="text-md">Waste</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
          <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
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
          <Checkbox defaultSelected>Aluminum/steel cans</Checkbox>
          <Checkbox defaultSelected>Plastic</Checkbox>
          <Checkbox defaultSelected>Glass</Checkbox>
          <Checkbox defaultSelected>Newspaper</Checkbox>
          <Checkbox defaultSelected>Magazines</Checkbox>
        </div>
          </div>
          </CardBody>
        </Card>
    )
}
export default Card2;