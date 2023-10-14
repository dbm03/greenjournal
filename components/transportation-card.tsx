import {Card, CardHeader, CardBody, CardFooter, Divider, Input, Checkbox, Spacer, Select, SelectItem, Button} from "@nextui-org/react";

const Card1 = () => {
    return(
        <div className="px-2 py-4 w-full  min-w-[375px]">
            <div className="flex flex-col gap-4">
            <p className="text-medium font-bold text-foreground">Transportation</p>
              <Divider/>
        <div className="flex flex-col gap-2">
        <p className="text-small text-default-500">Vehicles</p>
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input label="Miles/Week" className="max-w-[170px]" />
        <Input label="Miles/Gallon" className="max-w-[170px]" />
        </div>
        <Checkbox defaultSelected>I regularly maintain my vehicles.</Checkbox>
        </div>
        <div className="flex flex-col gap-2">
        
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
            <div className="flex flex-col gap-2">
            <p className="text-small text-default-500">Public Transportation</p>
            <Input label="Miles/Week" className="max-w-[170px]" />
            </div>
        <div className="flex flex-col gap-2">
        <p className="text-small text-default-500">Airline Flights</p>
        <Input label="Flights/Year" className="max-w-[170px]" />
        </div>
        </div>
        </div>
        <Button color="primary">Save Changes</Button>
        </div>
        </div>
    )
}
export default Card1;