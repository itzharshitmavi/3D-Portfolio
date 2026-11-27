/* eslint-disable @next/next/no-img-element */
import { SKILLS } from "@/data/constants";

export default function SkillDirectory() {
  return (
    <section
      id="skill-directory"
      className="relative z-10 mx-auto max-w-6xl px-4 py-12 pointer-events-auto"
    >
      <details className="rounded-2xl border border-border bg-background/95 p-3 sm:p-5">
        <summary className="cursor-pointer font-semibold text-lg">
          View all {Object.keys(SKILLS).length} skills &amp; keyboard shortcuts
        </summary>
        <p className="mt-3 text-sm text-muted-foreground">
          Résumé skills are distinguished from additional technologies preserved
          from the original keyboard. Some extended physical keys may be
          reserved by your browser; all 3D keys support hover and tap.
        </p>
        <div className="mt-5 grid grid-cols-1 min-[380px]:grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {Object.values(SKILLS).map((skill) => (
            <div
              key={skill.name}
              className="flex min-w-0 items-center gap-2 rounded-lg border border-border p-2"
            >
              <img
                src={skill.icon}
                width={28}
                height={28}
                alt=""
                className="shrink-0"
              />
              <div className="min-w-0">
                <p className="text-xs font-medium leading-snug [overflow-wrap:anywhere]">
                  {skill.label}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {skill.source === "resume" ? "Résumé" : "Additional"} ·{" "}
                  {skill.shortcut?.replace(/^Key|^Digit/, "")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
