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

export default function Home() {
  return (
    <section className="flex flex-col gap-6 md:grid md:grid-cols-3 md:grid-rows-3 md:gap-3">
      <div className="col-span-1 row-span-2">
        <EarthViewCard />
      </div>
      <div className=""></div>
      <div className="col-span-2 row-start-3"></div>
    </section>
  );
}
