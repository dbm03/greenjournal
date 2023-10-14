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
import GreenAI from "./greenai";
import { ManualSettings } from "./manualsettings";

const JournalCard = () => {
  const [selected, setSelected] = useState<string>("manual");

  return (
    <Card
      shadow="sm"
      fullWidth
      className="w-full h-full border-none border-neutral-600 bg-background/60 dark:bg-default-700/10 backdrop:blur-sm"
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">Metrics</h4>
      </CardHeader>
      <CardBody className={selected === "greenai" ? "flex flex-col-reverse" : "flex flex-col"}>
        {selected === "greenai" ? <GreenAI /> : <ManualSettings />}
      </CardBody>
      <CardFooter>
        <Tabs
          size="md"
          variant="solid"
          aria-label="Journal tabs"
          selectedKey={selected}
          fullWidth
          color="success"
          classNames={{
            tabList: "relative p-2",
          }}
          onSelectionChange={(e) => setSelected(e as string)}
        >
          <Tab key="manual" title="Manual"></Tab>
          <Tab key="greenai" title="GreenAI"></Tab>
        </Tabs>
      </CardFooter>
    </Card>
  );
};

export default JournalCard;
