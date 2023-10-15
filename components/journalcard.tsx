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
import CSS from "csstype";
import { IconSparkles } from "./icons";

const open: CSS.Properties = {
  height: "100%",
};
const marginAdjust: CSS.Properties = {
  marginTop: "10px",
};

const JournalCard = () => {
  const [selected, setSelected] = useState<string>("manual");

  return (
    <Card
      shadow="sm"
      fullWidth
      className="w-full h-full border-none border-neutral-600 bg-background/60 dark:bg-default-700/10 backdrop:blur-sm"
    >
      <CardHeader className="flex justify-center pb-0">
        <h4 className="text-xl font-bold uppercase">Metrics</h4>
      </CardHeader>
      <div
        className={
          selected === "greenai" ? "flex flex-col-reverse" : "flex flex-col"
        }
        style={open}
      >
        {selected === "greenai" ? <GreenAI /> : <ManualSettings />}
      </div>
      <CardFooter className="pt-0">
        <Tabs
          size="md"
          variant="solid"
          aria-label="Journal tabs"
          selectedKey={selected}
          fullWidth
          color="success"
          className="p-0"
          classNames={{
            base: "p-0",
            tabList: "relative p-0",
          }}
          onSelectionChange={(e) => setSelected(e as string)}
          style={marginAdjust}
        >
          <Tab key="manual" title="Manual"></Tab>
          <Tab
            key="greenai"
            className=""
            title={
              <div className="flex items-center gap-1">
                Echo
                <IconSparkles />
              </div>
            }
          ></Tab>
        </Tabs>
      </CardFooter>
    </Card>
  );
};

export default JournalCard;
