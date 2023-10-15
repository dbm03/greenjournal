"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import CSS from "csstype";
import {useContext} from "react";

const noOverflow: CSS.Properties = {
  overflow: "hidden",
}
import {TotalMetricTonsContext} from "@/app/page";

const CarbonFootPrintCard = ({ metricTons = 4.3 }) => {
  const {totalMetricTons, setTotalMetricTons} = useContext(TotalMetricTonsContext);

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
        <span className="font-nova text-8xl text-success">{Math.round(totalMetricTons*10)/10}</span>
        <p>metric tons</p>
      </CardBody>
    </Card>
  );
};

export default CarbonFootPrintCard;
