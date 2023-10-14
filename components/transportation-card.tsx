import {Card, CardHeader, CardBody, CardFooter, Divider, Input, Checkbox, Spacer, Select, SelectItem} from "@nextui-org/react";

const Card1 = () => {
    return(
    <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
            <div className="flex flex-col">
            <Spacer x={4} />
            <p className="text-md">Transportation</p>
            </div>
        </CardHeader>
        <Divider/>
        <CardBody>
        <div className="flex flex-col gap-6">
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
        </div>
        </CardBody>
        </Card>
    )
}
export default Card1;