"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import AboutSection from "@/components/sections/about";
import SkillDirectory from "@/components/sections/skill-directory";
import Credentials from "@/components/sections/credentials";
import HeroSection from "@/components/sections/hero";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <SkillDirectory />
        <ExperienceSection />
        <ProjectsSection />
        <Credentials />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
