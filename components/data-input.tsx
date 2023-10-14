"use client";
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {MonitorMobileIcon} from "./MonitorMobileIcon";
import Card1 from "@/components/transportation-card";
import Card2 from "@/components/energy-card";
import Card3 from "@/components/waste-card";
import Card4 from "@/components/other-card"
import CSS from 'csstype';

const Data = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const innerStyle:CSS.Properties = {
    overflowY: "scroll", 
    height: "290px"
  }

  return (
    <Accordion
      showDivider={false}
      className="p-2 flex flex-col gap-1 w-full max-w-[450px]"
      variant="shadow"
      itemClasses={itemClasses}
      disableAnimation={true}
    >
      <AccordionItem
        key="1"
        aria-label="Transportation"
        startContent={<MonitorMobileIcon className="text-success" />}
        subtitle={
          <p className="flex">
            <em>driving and traveling</em>
          </p>
        }
        title="Transportation"
      >
        <div style={innerStyle}>
        <Card1/>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Home Energy"
        startContent={<MonitorMobileIcon className="text-success" />}
        subtitle={
            <p className="flex">
              <em>energy efficiency and use</em>
            </p>
          }
        title="Home Energy"
      >
        <div style={innerStyle}>
        <Card2/>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Waste"
        startContent={<MonitorMobileIcon className="text-success" />}
        subtitle={
            <p className="flex">
              <em>garbage and waste</em>
            </p>
          }
        title="Waste"
      >
        <div style={innerStyle}>
        <Card3/>
        </div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Other"
        startContent={<MonitorMobileIcon className="text-success" />}
        subtitle={
            <p className="flex">
              <em>miscellaneous</em>
            </p>
          }
        title={
          <p className="flex gap-1 items-center">
            Other
          </p>
        }
      >
        <div style={innerStyle}>
        <Card4/>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
export default Data;