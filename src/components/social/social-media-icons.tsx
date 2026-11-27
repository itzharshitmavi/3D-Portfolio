"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa"; // or "react-icons/fa6"
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} color="currentColor" />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <FaLinkedin size={"24"} color="currentColor" />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex flex-wrap justify-center">
      {show &&
        BUTTONS.map((button) => (
          <Button asChild variant="ghost" size="icon" key={button.name}>
            <Link
              href={button.href}
              target="_blank"
              rel="noreferrer"
              aria-label={button.name}
            >
              {button.icon}
            </Link>
          </Button>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
