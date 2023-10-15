"use client";

import React, { FC } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Progress,
  Spacer,
  Tooltip,
  Button
} from "@nextui-org/react";
import { CarIcon } from "./CarIcon.jsx";
import { EnergyIcon } from "./EnergyIcon.jsx";
import { WasteIcon } from "./WasteIcon.jsx";
import { OtherIcon } from "./OtherIcon.jsx";
import CSS from "csstype";

interface CompProps {
  val1: number;
  val2: number;
  val3: number;
  val4: number;
}

const offset: CSS.Properties = {
  paddingTop: "5px",
};
const margins: CSS.Properties = {
  marginLeft: "5%",
  marginRight: "5%",
};

const Comparison: FC<CompProps> = ({ val1, val2, val3, val4 }) => {
  return (
    <Card
      shadow="sm"
      className="h-full border-none backdrop-blur-[2px] border-neutral-600 bg-background/60 dark:bg-default-700/10"
    >
      <CardHeader className="flex justify-center gap-2">
        <h4 className="text-xl font-bold uppercase">Breakdown</h4>
        <Tooltip showArrow={true} placement="right" content={
          <div className="max-w-[200px]">The farther the bar extends, the closer you are to living an environmentally conscious life.</div>
      }>
      <p>ⓘ</p>
    </Tooltip>
      </CardHeader>
      <div
        style={margins}
        className="flex flex-col items-center justify-center gap-1"
      >
        <Spacer />
        <div className="flex flex-wrap items-center w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
          <CarIcon className="text-success" style={offset} />
          <Progress color="success" aria-label="Loading..." value={val1} />
        </div>
        <div className="flex flex-wrap items-center w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
          <EnergyIcon className="text-success" style={offset} />
          <Progress color="success" aria-label="Loading..." value={val2} />
        </div>
        <div className="flex flex-wrap items-center w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
          <WasteIcon className="text-success" style={offset} />
          <Progress color="success" aria-label="Loading..." value={val3} />
        </div>
        <div className="flex flex-wrap items-center w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
          <OtherIcon className="text-success" style={offset} />
          <Progress color="success" aria-label="Loading..." value={val4} />
        </div>
      </div>
    </Card>
  );
};

export default Comparison;
