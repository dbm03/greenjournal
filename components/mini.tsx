import {Card, CardHeader, CardBody, Input, Checkbox, Spacer, Select, SelectItem, Button} from "@nextui-org/react";
import CSS from "csstype";
import {FC} from "react";

  interface MiniProps {
    title: string;
  }

const Mini: FC<MiniProps> = ({ title }) => {
    return(
        <Button className="w-min-[130px] h-max-[50px]">
        {title}
        </Button>
    )
}

export default Mini;