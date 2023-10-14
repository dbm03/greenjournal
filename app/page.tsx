import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import Chat from "@/components/chat";
import EarthViewCard from "@/components/earthviewcard";
import HistoryGraphCard from "@/components/historygraphcard";
import CarbonFootPrintCard from "@/components/carbonfootprintcard";
import JournalCard from "@/components/journalcard";

const initialData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
];

export default function Home() {
  return (
    <section className="flex justify-center gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center gap-2">
          <EarthViewCard />
          <div>
            <div>
              <CarbonFootPrintCard />
            </div>
            <div>
              <CarbonFootPrintCard />
            </div>
          </div>
        </div>
        <div>
          <HistoryGraphCard data={initialData} />
        </div>
      </div>
      <div>
        <JournalCard />
      </div>
    </section>
  );
}
