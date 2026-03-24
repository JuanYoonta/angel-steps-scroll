import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PropositoScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="proposito"
      className="relative flex min-h-screen items-center bg-nature-deep px-6 py-32"
    >
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <motion.span
          className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.4em] text-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Nuestro compromiso
        </motion.span>

        <motion.h2
          className="text-4xl font-black text-nature-deep-foreground sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Turismo con Propósito
        </motion.h2>

        <motion.div
          className="mx-auto mt-8 h-px w-20 bg-accent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        <motion.p
          className="mt-8 text-lg leading-relaxed text-nature-deep-foreground/80 sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Lo que vives aquí tiene raíces. Entras en una historia que protege la
          vida en estas montañas. Hemos sembrado más de{" "}
          <span className="font-semibold text-accent">6.000 árboles</span> de{" "}
          <span className="font-semibold text-accent">52 especies</span>,
          devolviendo el equilibrio a la montaña.
        </motion.p>
      </div>
    </section>
  );
};

export default PropositoScroll;
