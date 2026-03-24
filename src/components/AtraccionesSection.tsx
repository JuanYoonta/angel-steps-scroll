import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const atracciones = [
  {
    title: "Puentes Tibetanos",
    text: "Cruza la quebrada con el agua corriendo bajo tus pies y maravíllate con el cañón.",
    color: "from-amber-800 to-amber-900",
    placeholder: "https://placehold.co/600x400/5c3d1e/f0f0f0?text=Puentes+Tibetanos",
  },
  {
    title: "Malla Catamarán",
    text: "Vive la adrenalina suspendido a 200 metros sobre el río Moniquirá.",
    color: "from-sky-800 to-sky-900",
    placeholder: "https://placehold.co/600x400/1e3a5f/f0f0f0?text=Malla+Catamaran",
  },
  {
    title: "Péndulo Paso al Vacío",
    text: "Enfrenta tus límites y descubre que el mayor desafío es dar el primer paso.",
    color: "from-emerald-800 to-emerald-900",
    placeholder: "https://placehold.co/600x400/1a5632/f0f0f0?text=Pendulo",
  },
  {
    title: "Puente de Cristal",
    text: "Atrévete a cruzar un desafío de 35 cm sobre el filo de la montaña.",
    color: "from-slate-700 to-slate-800",
    placeholder: "https://placehold.co/600x400/3a4a5c/f0f0f0?text=Puente+Cristal",
  },
  {
    title: "Las Alas más Altas de Colombia",
    text: "Un ícono que te regala vistas espectaculares y una experiencia única.",
    color: "from-orange-700 to-orange-800",
    placeholder: "https://placehold.co/600x400/9a4a1a/f0f0f0?text=Alas",
  },
  {
    title: "Canopy 230 mts",
    text: "Cruza el cañón combinando velocidad, altura y vistas espectaculares.",
    color: "from-teal-700 to-teal-800",
    placeholder: "https://placehold.co/600x400/1a5c4a/f0f0f0?text=Canopy",
  },
];

const AtraccionesSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="atracciones" className="bg-background px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 text-center">
          <motion.span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent" initial={{ opacity: 0 }} animate={headerInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
            Experiencias
          </motion.span>
          <motion.h2 className="mt-4 text-4xl font-black text-foreground sm:text-5xl md:text-6xl" initial={{ opacity: 0, y: 30 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            Naturaleza Extrema
          </motion.h2>
          <motion.p className="mt-2 text-lg text-muted-foreground" initial={{ opacity: 0 }} animate={headerInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            12 Desafíos que te esperan
          </motion.p>
        </div>

        {/* Stacking cards */}
        <div className="relative">
          {atracciones.map((item, i) => (
            <StackingCard key={item.title} item={item} index={i} total={atracciones.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

function StackingCard({
  item,
  index,
  total,
}: {
  item: (typeof atracciones)[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${80 + index * 20}px`, zIndex: index + 1 }}
    >
      <motion.div
        ref={cardRef}
        className={`mb-8 flex flex-col items-center gap-8 rounded-2xl border border-border bg-card p-6 shadow-lg lg:flex-row lg:gap-12 lg:p-10 ${
          isEven ? "" : "lg:flex-row-reverse"
        }`}
        style={{ scale }}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-xl lg:w-1/2">
          <div className="aspect-[3/2]">
            <div className={`h-full w-full bg-gradient-to-br ${item.color}`} />
            <img src={item.placeholder} alt={item.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="rounded-full bg-accent/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              Desafío {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-black text-foreground sm:text-3xl lg:text-4xl">{item.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{item.text}</p>
          <a href="#planes" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent/80">
            Ver planes <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default AtraccionesSection;
