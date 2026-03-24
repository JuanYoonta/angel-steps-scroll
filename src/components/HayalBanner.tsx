import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TreePine, ArrowRight } from "lucide-react";

const HayalBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800" />
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600/1a4a2a/1a4a2a')] bg-cover bg-center opacity-30" />

      <div ref={ref} className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-24 text-center lg:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <TreePine className="mx-auto h-12 w-12 text-accent" />
        </motion.div>

        <motion.h2
          className="text-3xl font-black text-primary-foreground sm:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          EcoParque El Hayal
        </motion.h2>

        <motion.p
          className="text-xl font-light text-accent"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contemplación Extrema
        </motion.p>

        <motion.p
          className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          El complemento perfecto para vivir la naturaleza desde la calma. A solo 5 kilómetros del
          Paso del Ángel®.
        </motion.p>

        <motion.a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Conocer más <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
};

export default HayalBanner;
