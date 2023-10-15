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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";
import Mini from "@/components/mini";
import CSS from "csstype";
import { useState } from "react";

const stretch: CSS.Properties = {
  height: "100%",
};
const min: CSS.Properties = {
  width: "50%",
  marginBottom: "10px",
};

const Tips = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [temp, setTemp] = useState<string>("");
  const [vals, setVals] = useState<string[]>([]);
  const log = () => {
    vals.push(temp);
    setTemp("");
  };
  return (
    <Card
      shadow="sm"
      fullWidth
      className="w-full h-full border-none border-neutral-600 bg-background/60 dark:bg-default-700/10 backdrop:blur-sm"
      style={stretch}
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">Entries</h4>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-4">
          {vals.map((val, index) => (
            <Mini
              key={index}
              title={"Log #" + String(vals.indexOf(val) + 1)}
              content={val}
              onDelete={() => {
                setVals(vals.filter((v) => v !== val));
              }}
            ></Mini>
          ))}
        </div>
      </CardBody>
      <div className="flex flex-col-reverse items-center justify-center">
        <Button
          style={min}
          color="success"
          className="text-md"
          size="sm"
          onPress={onOpen}
        >
          <b>+</b>
        </Button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Log Your Progress
              </ModalHeader>
              <ModalBody>
                <p>
                  The best way to hold yourself accountable is by logging your
                  progress regularly. Feel free to log what changes you have
                  made in your life to reduce your carbon footprint or make a
                  commitment to make changes in the future.
                </p>

                <Textarea
                  placeholder="An empty space for your thoughts..."
                  className="max-w-md"
                  minRows={8}
                  value={temp}
                  onValueChange={setTemp}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onPress={onClose} onPressEnd={log}>
                  Log
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Card>
  );
};
export default Tips;
