"use client";
import React, { useState } from "react";
import { ResponsiveDialog, ResponsiveDialogContent, ResponsiveDialogTrigger, ResponsiveDialogTitle, ResponsiveDialogDescription, ResponsiveDialogClose } from "../ui/responsive-dialog";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { motion } from "motion/react";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="mx-auto w-full max-w-7xl px-4 py-20 md:py-28">
      <SectionHeader id="projects" title="Projects" desc="Selected projects · Open a card to explore its details and repository." className="static mb-10" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <div className="mt-8 text-center"><Link href="https://github.com/itzharshitmavi" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/90 px-5 py-3 text-sm font-medium">More on GitHub <ArrowUpRight className="size-4 shrink-0" /></Link></div>
    </SectionWrapper>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="min-w-0 flex pointer-events-auto">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger asChild>
          <button type="button" className="group flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background/95 text-left shadow-sm transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onFocus={() => setIsHovered(true)} onBlur={() => setIsHovered(false)}>
            <span className="relative block aspect-[3/2] w-full overflow-hidden" aria-hidden="true">
              <ScrollingPreview src={project.src} alt={project.title} isHovered={isHovered} fit="contain" />
            </span>
            <span className="flex w-full min-w-0 flex-1 flex-col gap-3 p-4 sm:p-5">
              <span className="flex min-w-0 items-start justify-between gap-3">
                <span className="min-w-0 font-display text-base sm:text-lg font-semibold leading-snug [overflow-wrap:anywhere]">{project.title}</span>
                <ArrowUpRight aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">{project.stack}</span>
              <span className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-1 text-xs text-muted-foreground">
                <span className="rounded-full border border-border px-2.5 py-1 leading-snug">{project.category}</span>
                <span>{project.date}</span>
              </span>
            </span>
          </button>
        </ResponsiveDialogTrigger>
        <ResponsiveDialogContent className="project-dialog min-w-0 max-h-[90dvh] overflow-hidden gap-0 p-0 md:w-[calc(100%_-_2rem)] md:max-w-4xl md:!flex md:flex-col">
          <ResponsiveDialogClose className="absolute right-4 top-5 z-10 rounded-md bg-background/90 p-2 md:hidden" aria-label="Close project"><X className="size-4" /></ResponsiveDialogClose>
          <div className="project-dialog-body min-h-0 min-w-0 overflow-y-auto overscroll-contain" data-lenis-prevent>
            <div className="border-b border-border px-5 py-5 pr-12 sm:px-8 sm:pr-14">
              <ResponsiveDialogTitle className="font-display text-xl sm:text-2xl font-bold leading-snug [overflow-wrap:anywhere]">{project.title}</ResponsiveDialogTitle>
              <ResponsiveDialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.category} · {project.date}</ResponsiveDialogDescription>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {project.github && project.github !== "#" && <Link href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm">Source code <ArrowUpRight className="size-4 shrink-0" /></Link>}
                {project.live && project.live !== "#" && <Link href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm">Visit <ArrowUpRight className="size-4 shrink-0" /></Link>}
              </div>
            </div>
            <div className="min-w-0 px-5 py-6 sm:px-8 sm:py-8">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-5 sm:grid-cols-2 mb-6">
                {([ ["Interface", project.skills.frontend], ["Backend / Core", project.skills.backend] ] as const).filter(([, items]) => items.length > 0).map(([label, items]) => (
                  <div key={label} className="min-w-0 space-y-3">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => <span key={item.title} className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-lg border border-border bg-secondary/30 px-3 py-2 text-sm leading-snug"><span aria-hidden="true" className="size-5 shrink-0">{item.icon}</span><span className="min-w-0 [overflow-wrap:anywhere]">{item.title}</span></span>)}
                    </div>
                  </div>
                ))}
              </motion.div>
              <div className="mb-6 h-px bg-border" />
              <motion.div className="portfolio-prose min-w-0 text-left" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>{project.content}</motion.div>
            </div>
          </div>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
}
