import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TreePine, Leaf } from "lucide-react";

const IntroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="proposito" className="relative min-h-[100dvh] overflow-hidden bg-nature-deep px-6 py-24 lg:py-0">
      <div ref={ref} className="mx-auto grid min-h-[100dvh] max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Text side */}
        <div>
          <motion.div className="flex items-center gap-2" initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <Leaf className="h-5 w-5 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Nuestro compromiso</span>
          </motion.div>

          <motion.h2 className="mt-6 text-4xl font-black text-nature-deep-foreground sm:text-5xl" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            Turismo con Propósito
          </motion.h2>

          <motion.h3 className="mt-3 text-xl font-light text-accent" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            Lo que vives aquí tiene raíces
          </motion.h3>

          <motion.div className="mt-6 h-px w-20 bg-accent" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} style={{ originX: 0 }} transition={{ duration: 0.5, delay: 0.3 }} />

          <motion.p className="mt-8 text-lg leading-relaxed text-nature-deep-foreground/80" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.35 }}>
            Nuestros parques <strong className="text-accent">Paso del Ángel®</strong> y{" "}
            <strong className="text-accent">EcoParque El Hayal</strong> nacen del compromiso de cuidar la montaña. Hemos sembrado más de{" "}
            <span className="font-semibold text-accent">6.000 árboles</span> de{" "}
            <span className="font-semibold text-accent">52 especies</span>, devolviendo el equilibrio a la montaña.
          </motion.p>

          <motion.p className="mt-4 text-lg leading-relaxed text-nature-deep-foreground/80" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.45 }}>
            Cuando vienes, no solo llegas a un parque. Entras en una historia que protege la vida en estas montañas.
          </motion.p>

          <motion.div className="mt-8 flex items-center gap-6" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.55 }}>
            <div className="text-center">
              <p className="text-3xl font-black text-accent">6.000+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-nature-deep-foreground/60">Árboles sembrados</p>
            </div>
            <div className="h-10 w-px bg-nature-deep-foreground/20" />
            <div className="text-center">
              <p className="text-3xl font-black text-accent">52</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-nature-deep-foreground/60">Especies nativas</p>
            </div>
            <div className="h-10 w-px bg-nature-deep-foreground/20" />
            <div className="text-center">
              <TreePine className="mx-auto h-8 w-8 text-accent" />
              <p className="mt-1 text-xs uppercase tracking-wider text-nature-deep-foreground/60">Impacto real</p>
            </div>
          </motion.div>
        </div>

        {/* Parallax image placeholder */}
        <motion.div
          ref={imgRef}
          className="relative h-80 overflow-hidden rounded-2xl lg:h-[500px]"
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="absolute inset-[-20%] h-[140%] w-full" style={{ y: imgY }}>
            <div className="h-full w-full bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700" />
            <img src="https://placehold.co/800x600/2d6a4f/f0f0f0?text=Naturaleza" alt="Naturaleza en Paso del Ángel" className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-40" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
