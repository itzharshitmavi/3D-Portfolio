import React, { Suspense } from "react";
import Link from "next/link";
import { footer } from "./config";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function CopyrightYear() {
  const year = new Date().getFullYear();
  return <>{year}</>;
}

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row sm:flex-wrap md:px-6 sm:justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
        ©{" "}
        <Suspense fallback={null}>
          <CopyrightYear />
        </Suspense>{" "}
        {config.author}. All rights reserved.
      </p>
      <SocialMediaButtons />
      <nav className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="text-sm px-2 py-2 underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
