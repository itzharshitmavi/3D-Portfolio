import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({ id, title, desc, className }: { id: string, title: string | ReactNode, desc?: string, className?: string }) => {
  return (

    <div className={cn("top-[70px] sticky mb-96 min-w-0 px-2", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "portfolio-section-title text-center font-bold leading-[1.15]",
              "text-foreground"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      {desc && <p className="mx-auto mt-3 max-w-3xl font-normal text-sm sm:text-base leading-relaxed text-center text-muted-foreground">{desc}</p>}
    </div>
  )
}
