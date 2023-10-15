"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Spacer} from "@nextui-org/react";

export default function AboutPage() {
	return (
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Worldwide carbon dioxide emissions have increased by&nbsp;</h1>
					<h1 className={title({ color: "green" })}>35.59%&nbsp;</h1>
					<br />
					<h1 className={title()}>
						in the last 20 years.
					</h1>
					<h2 className={subtitle({ class: "mt-4" })}>
						Your individual impact — your carbon footprint — cannot be underestimated.
					</h2>
				</div>
	
				<div className="flex gap-3">
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={"https://www.britannica.com/science/carbon-footprint"}
					>
						Britannica.org
					</Link>
					<Link
						isExternal
						as={NextLink}
						href="https://www3.epa.gov/carbon-footprint-calculator/"
						className={buttonStyles({ color: "success", radius: "full", variant: "shadow" })}
					>
						EPA.gov
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={"https://www.statista.com/statistics/276629/global-co2-emissions/"}
					>
						Statista.com
					</Link>
				</div>
				<Spacer/>
				<h2 className="text-small text-default-500">
						<em>Our estimates are based on data and calculations provided by the United States Environmental Protection Agency.</em>
					</h2>
				<h2 className={subtitle({ class: "mt-2" })}>
				 	GreenJournal came to be by combining the SUSTAIN, INNOVATE, DIGITAL ART, and EDU tracks while also staying loyal to this year's theme, a Journal of Memories.
				</h2>
			</section>
		);
}
