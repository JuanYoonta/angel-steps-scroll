import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { User, Mail, Phone, Ticket } from "lucide-react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[100dvh] overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 h-full w-full" style={{ y, scale }}>
        <div className="h-full w-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900" />
        <img src="https://placehold.co/1920x1080/1a3a2a/1a3a2a" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 pb-32 text-center"
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
          className="text-shadow-hero text-5xl font-black uppercase leading-none tracking-tight text-primary-foreground sm:text-7xl md:text-9xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          Paso del Ángel
        </motion.h1>

        <motion.p
          className="mt-4 text-lg font-light text-primary-foreground/90 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Parque de Aventura
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-36 left-1/2 -translate-x-1/2 md:bottom-28"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/50 p-1">
            <div className="mx-auto h-2 w-1 rounded-full bg-primary-foreground/70" />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom reservation bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-nature-deep/90 backdrop-blur-md">
        <form className="mx-auto flex max-w-6xl flex-col items-stretch gap-3 px-4 py-4 md:flex-row md:items-center md:gap-4 md:py-3">
          <div className="flex flex-1 items-center gap-2 rounded-lg bg-primary-foreground/10 px-3 py-2">
            <User className="h-4 w-4 flex-shrink-0 text-accent" />
            <input type="text" placeholder="Nombre" className="w-full bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-lg bg-primary-foreground/10 px-3 py-2">
            <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
            <input type="email" placeholder="Email" className="w-full bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-lg bg-primary-foreground/10 px-3 py-2">
            <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
            <input type="tel" placeholder="Teléfono" className="w-full bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none" />
          </div>
          <div className="flex w-full items-center gap-2 rounded-lg bg-primary-foreground/10 px-3 py-2 md:w-32">
            <Ticket className="h-4 w-4 flex-shrink-0 text-accent" />
            <input type="number" min={1} placeholder="Tickets" className="w-full bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none" />
          </div>
          <button type="submit" className="rounded-full bg-accent px-8 py-2.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-transform hover:scale-105">
            Reservar
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
