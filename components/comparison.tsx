"use client";

import React, {FC} from "react";
import { Card, CardBody, CardHeader, Progress, Spacer } from "@nextui-org/react";
import {CarIcon} from "./CarIcon.jsx";
import {EnergyIcon} from "./EnergyIcon.jsx";
import {WasteIcon} from "./WasteIcon.jsx";
import {OtherIcon} from "./OtherIcon.jsx";
import CSS from "csstype";

interface CompProps {
    val1: number;
    val2: number;
    val3: number;
    val4: number;
  }

const offset: CSS.Properties = {
    paddingTop: "5px",
}
const marginFix: CSS.Properties = {
    marginTop: "0px",
    paddingTop: "0px"
}

const Comparison: FC<CompProps> = ({val1, val2, val3, val4}) => {
  return (
    <Card
      shadow="sm"
      className="h-full w-64 aspect-square border-none backdrop-blur-[2px] border-neutral-600 bg-background/60 dark:bg-default-700/10"
    >
        <CardHeader className="flex justify-center text-xl font-bold uppercase">
        <h4>Comparison</h4>
        </CardHeader>
      <CardBody style={marginFix} className="flex flex-col items-center justify-center gap-1">
      
      <Spacer/>
        <Progress size="lg" color="success" aria-label="Loading..." value={(val1+val2+val3+val4)/4} />
        <Spacer/>
        <p><em>Breakdown by Category</em></p>
      <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
      <CarIcon className="text-success" style={offset} />
      <Progress color="success" aria-label="Loading..." value={val1} />
      </div>
      <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
      <EnergyIcon className="text-success" style={offset} />
      <Progress color="success" aria-label="Loading..." value={val2} />
      </div>
      <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
      <WasteIcon className="text-success" style={offset} />
      <Progress color="success" aria-label="Loading..." value={val3} />
      </div>
      <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
      <OtherIcon className="text-success" style={offset} />
      <Progress color="success" aria-label="Loading..." value={val4} />
      </div>
      </CardBody>
    </Card>
  );
};

export default Comparison;
