"use client";

import { Card, CardHeader } from "@nextui-org/react";

const EarthViewCard = () => {
  return (
    <Card
      shadow="sm"
      isBlurred
      className="border border-neutral-600 bg-background/60 dark:bg-default-100/10"
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">Earth View</h4>
      </CardHeader>
      <div className="flex items-center justify-center">
        <img src="lowpolyearth.png" className="max-w-sm"></img>
      </div>
    </Card>
  );
};

export default EarthViewCard;
