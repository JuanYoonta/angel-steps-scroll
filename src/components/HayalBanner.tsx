import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TreePine, ArrowRight } from "lucide-react";

const HayalBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] overflow-hidden">
      {/* Parallax dark background */}
      <motion.div className="absolute inset-[-20%] h-[140%] w-full" style={{ y: bgY }}>
        <div className="h-full w-full bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900" />
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/0a1f12/0a1f12')] bg-cover bg-center opacity-40" />
      </motion.div>
      <div className="absolute inset-0 bg-black/30" />

      <div ref={ref} className="relative flex min-h-[100dvh] items-center px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6 }}>
              <TreePine className="h-12 w-12 text-accent" />
            </motion.div>

            <motion.h2 className="mt-6 text-3xl font-black text-primary-foreground sm:text-5xl" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
              EcoParque El Hayal
            </motion.h2>

            <motion.p className="mt-3 text-xl font-light text-accent" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
              Contemplación Extrema
            </motion.p>

            <motion.p className="mt-6 text-lg leading-relaxed text-primary-foreground/80" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
              El complemento perfecto para vivir la naturaleza desde la calma. A solo 5 kilómetros del Paso del Ángel®.
            </motion.p>

            <motion.a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-transform hover:scale-105" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
              Conocer más <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HayalBanner;
