"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useState } from "react";

const JournalCard = () => {
  const [selected, setSelected] = useState<string>("greenai");

  return (
    <Card
      shadow="sm"
      className="h-full border-none bg-background/60 dark:bg-default-100/30"
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">Metrics</h4>
      </CardHeader>
      <CardBody className="flex flex-col-reverse">
        <Tabs
          size="md"
          aria-label="Journal tabs"
          selectedKey={selected}
          onSelectionChange={(e) => setSelected(e as string)}
        >
          <Tab key="manual" title="Manual">
            <p>Manual</p>
          </Tab>
          <Tab key="greenai" title="Green AI">
            <p>Green AI</p>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default JournalCard;
