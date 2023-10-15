"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Globe from "./globe";
import GltfModel from "./gtflModel";

const EarthViewCard = () => {
  return (
    <Card
      shadow="sm"
      fullWidth
      className="border-none h-full border-neutral-600 backdrop-blur-[1px] bg-background/60 dark:bg-default-800/10"
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">Earth View</h4>
      </CardHeader>
      <CardBody>
        <Canvas shadows flat linear>
          <scene>
            <Globe />
          </scene>
        </Canvas>
      </CardBody>
    </Card>
  );
};

export default EarthViewCard;
