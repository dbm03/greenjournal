import {Card, CardHeader, CardBody, Input, Checkbox, Spacer, Select, SelectItem, Button} from "@nextui-org/react";
import CSS from "csstype";
import {FC} from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";

  interface MiniProps {
    title: string;
    content: string;
  }

const Mini: FC<MiniProps> = ({ title, content }) => {
    return(
      <Popover placement="left" showArrow={true}>
    <PopoverTrigger>
    <Button className="w-min-[130px] h-max-[50px]">
        {title}
        </Button>
    </PopoverTrigger>
    <PopoverContent>
    {content}
    </PopoverContent>
    </Popover>

    )
}

export default Mini;