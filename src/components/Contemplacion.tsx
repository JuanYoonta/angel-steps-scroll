import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import hamacasImg from "@/assets/hamacas.jpg";

const Contemplacion = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={hamacasImg}
        alt="Hamacas suspendidas sobre el cañón al atardecer"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div
        ref={ref}
        className="relative z-10 flex min-h-screen items-end px-6 pb-24 sm:items-center sm:pb-0"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-4xl font-black text-primary-foreground sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Contemplación Extrema
          </motion.h2>

          <motion.div
            className="mx-auto mt-6 h-px w-16 bg-accent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          <motion.p
            className="mt-8 text-lg leading-relaxed text-primary-foreground/85 sm:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ocho Hamacas en el Cielo para vivir una conexión única en altura, y
            nuestro Café Canto del Río para una pausa de calma con el sonido del
            agua y el aroma del café.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contemplacion;
