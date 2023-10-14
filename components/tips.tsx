import {Card, CardHeader, CardBody, Input, Checkbox, Spacer, Select, SelectItem, Button} from "@nextui-org/react";
import Mini from "@/components/mini";
import CSS from "csstype";

const stretch: CSS.Properties = {
    height: "100%"
}

const Tips = () => {
    return (
    <Card
      shadow="sm"
      fullWidth
      className="w-full h-full border-none border-neutral-600 bg-background/60 dark:bg-default-700/10 backdrop:blur-sm"
      style={stretch}
    >
                <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">History</h4>
        </CardHeader>
        <CardBody>
        <div  className="flex flex-col gap-4">
        <Mini title="10.14.2023" />
        <Mini title="9.25.2023" />
        </div>
        </CardBody>
        </Card>
    )
}
export default Tips;