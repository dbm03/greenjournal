"use client";

import { Card, CardHeader } from "@nextui-org/react";

const EarthViewCard = () => {
  return (
    <Card
      shadow="sm"
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/30"
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl uppercase">Earth View</h4>
      </CardHeader>
      <div className="flex items-center justify-center">
        <img src="lowpolyearth.png" className="w-64"></img>
      </div>
    </Card>
  );
};

export default EarthViewCard;
