"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="mx-auto w-full max-w-6xl px-4 py-20 md:py-28">
      <SectionHeader id="contact" title="Let's work together" desc="Have a project, collaboration or opportunity in mind?" className="static mb-10 md:mb-14" />
      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start pointer-events-auto">
        <Card className="min-w-0 bg-background/95 backdrop-blur-sm rounded-2xl">
          <CardHeader className="p-5 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl">Get in touch</CardTitle>
            <CardDescription>Contact me directly or send a message using the form.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 px-5 sm:px-6">
            <div className="flex min-w-0 items-start gap-3">
              <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1"><p className="text-xs text-muted-foreground">Email</p><a href={`mailto:${config.email}`} className="block font-medium text-sm sm:text-base underline underline-offset-4 [overflow-wrap:anywhere]">{config.email}</a></div>
            </div>
            <div className="flex min-w-0 items-start gap-3">
              <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1"><p className="text-xs text-muted-foreground">Phone</p><a href={`tel:${config.phone}`} className="block text-sm sm:text-base font-medium [overflow-wrap:anywhere]">{config.phone}</a></div>
            </div>
            <div className="flex min-w-0 items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1"><p className="text-xs text-muted-foreground">Location</p><p className="text-sm sm:text-base font-medium">{config.location}</p></div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full min-w-0 bg-background/95 backdrop-blur-sm rounded-2xl">
          <CardHeader className="p-5 sm:p-6"><CardTitle className="text-xl sm:text-2xl">Contact form</CardTitle><CardDescription>Tell me how I can help.</CardDescription></CardHeader>
          <CardContent className="px-5 sm:px-6"><ContactForm /></CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
