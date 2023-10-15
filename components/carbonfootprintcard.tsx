"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import CSS from "csstype";
import { useContext } from "react";

const noOverflow: CSS.Properties = {
  overflow: "hidden",
};
import { TotalMetricTonsContext } from "./metrictonscontext";

const CarbonFootPrintCard = ({ metricTons = 4.3 }) => {
  const { totalMetricTons, setTotalMetricTons } = useContext(
    TotalMetricTonsContext
  );
  return (
    <Card
      shadow="sm"
      className="h-full border-none backdrop-blur-[2px] border-neutral-600 bg-background/60 dark:bg-default-700/10"
      style={noOverflow}
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">Carbon Footprint</h4>
      </CardHeader>
      <CardBody
        style={noOverflow}
        className="flex flex-col items-center justify-center"
      >
        <span
          className={
            totalMetricTons < 10
              ? "font-nova text-8xl text-success"
              : totalMetricTons < 16
              ? "font-nova text-8xl text-normal"
              : "font-nova text-8xl text-default"
          }
        >
          {Math.round(totalMetricTons * 10) / 10}
        </span>
        <p>metric tons per year</p>
      </CardBody>
    </Card>
  );
};

export default CarbonFootPrintCard;
