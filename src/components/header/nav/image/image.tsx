import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import styles from "./style.module.scss";
import { opacity } from "../../anim";
import { cn } from "@/lib/utils";

interface IndexProps {
  src: string;
  isActive: boolean;
}

const Index: React.FC<IndexProps> = ({ src, isActive }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <Image
        src={src}
        width={400}
        height={400}
        className="w-full h-full object-contain"
        alt={"Image"}
        // priority={true}
      />
    </motion.div>
  );
};

export default Index;
