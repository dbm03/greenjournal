"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import CSS from "csstype";

const noOverflow: CSS.Properties = {
  overflow: "hidden",
}

const CarbonFootPrintCard = ({ metricTons = 4.3 }) => {
  return (
    <Card
      shadow="sm"
      className="h-full border-none backdrop-blur-[2px] border-neutral-600 bg-background/60 dark:bg-default-700/10"
      style={noOverflow}
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">Carbon Footprint</h4>
      </CardHeader>
      <CardBody style={noOverflow} className="flex flex-col items-center justify-center">
        <span className="font-nova text-8xl text-success">{metricTons}</span>
        <p>metric tons</p>
      </CardBody>
    </Card>
  );
};

export default CarbonFootPrintCard;
