"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import CSS from "csstype";

const hidden: CSS.Properties = {
  overflow: "hidden",
}

const HistoryGraphCard = (props) => {
  const {
    data,
    colors: {
      backgroundColor = "transparent",
      lineColor = "rgba(0, 218, 106, 1)",
      textColor = "white",
      areaTopColor = "rgba(0, 218, 106, 1)",
      areaBottomColor = "rgba(0, 218, 106, 0.28)",
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 140,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return (
    <Card
      shadow="sm"
      isBlurred
      className="h-full border-none bg-background/60 dark:bg-default-700/10"
    >
      <CardHeader className="flex items-center justify-center">
        <h3 className="text-2xl font-semibold uppercase">History</h3>
      </CardHeader>
      <CardBody className="flex-col-reverse" style={hidden}>
        <div ref={chartContainerRef} />
      </CardBody>
    </Card>
  );
};

export default HistoryGraphCard;
