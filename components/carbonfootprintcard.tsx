"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";

const CarbonFootPrintCard = ({ metricTons = 4.3 }) => {
  return (
    <Card
      shadow="sm"
      isBlurred
      className="h-full border-none bg-background/60 dark:bg-default-100/30"
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">Carbon Footprint</h4>
      </CardHeader>
      <CardBody className="flex flex-col items-center justify-center gap-2">
        <span className="font-extrabold text-9xl">{metricTons}</span>
        <p>metric tons</p>
      </CardBody>
    </Card>
  );
};

export default CarbonFootPrintCard;
