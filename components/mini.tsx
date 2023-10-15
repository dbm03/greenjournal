import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Checkbox,
  Spacer,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import CSS from "csstype";
import { FC } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { ButtonGroup } from "@nextui-org/button";

interface MiniProps {
  title: string;
  content: string;
  onDelete: () => void;
}

const Mini: FC<MiniProps> = ({ title, content, onDelete }) => {
  return (
    <Popover placement="left" showArrow={true}>
      <ButtonGroup variant="flat">
        <PopoverTrigger>
          <Button className="w-min-[130px] h-max-[50px] rounded-r-[0rem]">
            {title}
          </Button>
        </PopoverTrigger>
        <Button
          isIconOnly
          className="rounded-l-[0rem] min-w-0 bg-neutral-800 hover:bg-neutral-600"
          onPress={onDelete}
        >
          X
        </Button>
      </ButtonGroup>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
};

const CloseButton = () => {
  return (
    <Button isIconOnly size="sm">
      <b>X</b>
    </Button>
  );
};

export default Mini;
