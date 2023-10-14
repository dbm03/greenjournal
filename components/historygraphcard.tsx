"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

const HistoryGraphCard = (props) => {
  const {
    data,
    colors: {
      backgroundColor = "transparent",
      lineColor = "#2962FF",
      textColor = "white",
      areaTopColor = "#2962FF",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
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
      height: 100,
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
      className="border-none bg-background/60 dark:bg-default-100/30"
    >
      <CardHeader className="flex items-center justify-center">
        <h3 className="text-2xl font-semibold uppercase">History</h3>
      </CardHeader>
      <CardBody>
        <div ref={chartContainerRef} />
      </CardBody>
    </Card>
  );
};

export default HistoryGraphCard;
