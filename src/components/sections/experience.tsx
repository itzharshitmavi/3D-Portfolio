import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
const education = [
  { title: "B.Tech — Computer Science & Engineering", school: "Dewan VS Institute of Engineering and Technology, Meerut", period: "Aug 2023 – Expected 2027", score: "CGPA: 7.3", details: "OOP, Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering" },
  { title: "Class XII (PCM)", school: "Vandana Inter College, Meerut", period: "Apr 2022 – Mar 2023", score: "73.4%", details: "Physics, Chemistry and Mathematics" },
  { title: "Class X", school: "Translam Academy International, Meerut", period: "Apr 2020 – Mar 2021", score: "85%", details: "Secondary education" },
];
export default function ExperienceSection() {
  return <SectionWrapper id="education" className="relative z-10 mx-auto max-w-4xl px-4 py-24"><SectionHeader id="education" title="Education" desc="My academic journey" className="static mb-12"/><div className="grid min-w-0 gap-5">{education.map((e,i) => <motion.div key={e.title} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><Card className="bg-background/95"><CardHeader><CardTitle className="text-lg sm:text-2xl leading-snug">{e.title}</CardTitle><p className="text-muted-foreground">{e.school}</p><p className="font-mono text-xs leading-relaxed">{e.period}</p></CardHeader><CardContent><p className="font-bold">{e.score}</p><p className="mt-2 text-sm text-muted-foreground">{e.details}</p></CardContent></Card></motion.div>)}</div></SectionWrapper>;
}
