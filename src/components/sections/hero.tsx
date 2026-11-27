import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa"; // or "react-icons/fa6"
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-[100svh]")}>
      <div className="grid md:grid-cols-2 min-w-0">
        <div
          className={cn(
            "min-h-[100svh] z-[2] min-w-0",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-24 pb-28 px-5 sm:px-8 md:px-8 lg:px-12 xl:px-20 md:py-24"
          )}
        >
          {!isLoading && (
            <div className="flex w-full min-w-0 flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "hero-name leading-[1.06] text-foreground text-left",
                          "font-bold",
                          "cursor-default font-display"
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      B.Tech CSE · Class of 2027
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl bg-clip-text "
                    )}
                  >
                    Full-Stack &amp; AI Developer
                  </p>
                </BlurIn>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">B.Tech CSE · Class of 2027 · ERP, CRM &amp; AI workflows</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit max-w-full">
                <BoxReveal delay={2} width="100%">
                  <Button asChild className="flex items-center gap-2 w-full"><Link href="/resume"><File size={20} /> Résumé</Link></Button>
                </BoxReveal>
                <div className="md:self-start flex flex-wrap gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Button asChild variant="outline"><Link href="#contact">Hire Me</Link></Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Open to software developer opportunities</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2">
                    <Button asChild variant="outline" size="icon"><Link href={config.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SiGithub size={22} /></Link></Button>
                    <Button asChild variant="outline" size="icon"><Link href={config.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={22} /></Link></Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-5 md:bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
