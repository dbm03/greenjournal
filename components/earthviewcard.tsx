"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";

const EarthViewCard = () => {
  return (
    <Card
      shadow="sm"
      fullWidth
      className="border-none border-neutral-600 backdrop-blur-[1px] bg-background/60 dark:bg-default-800/10"
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">Earth View</h4>
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-center">
          <img src="lowpolyearth.png" className="max-w-sm"></img>
        </div>
      </CardBody>
    </Card>
  );
};

export default EarthViewCard;
