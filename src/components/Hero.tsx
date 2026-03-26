import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/PasoDelAngel_Home_IMG01.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroImg}
          alt="Cañón majestuoso en Paso del Ángel"
          className="h-full w-full object-cover scale-110"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </motion.div>

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ opacity }}
      >
        <motion.p
          className="mb-4 text-sm font-body uppercase tracking-[0.3em] text-primary-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Santa Sofía, Boyacá · Destino Natural
        </motion.p>

        <motion.h1
          className="text-shadow-hero text-4xl font-black uppercase leading-none tracking-tight text-primary-foreground sm:text-6xl md:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          Paso del Ángel
        </motion.h1>

        <motion.p
          className="mt-3 text-lg font-light text-primary-foreground/90 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Parque de Aventura
        </motion.p>

        <motion.a
          href="#proposito"
          className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Vive la emoción
        </motion.a>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/50 p-1">
            <div className="mx-auto h-2 w-1 rounded-full bg-primary-foreground/70" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
