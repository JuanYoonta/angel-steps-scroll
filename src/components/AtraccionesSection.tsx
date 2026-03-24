import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.4em] text-accent"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Experiencias
          </motion.span>
          <motion.h2
            className="mt-4 text-4xl font-black text-foreground sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Naturaleza Extrema
          </motion.h2>
          <motion.p
            className="mt-2 text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            12 Desafíos que te esperan
          </motion.p>
        </div>

        {/* Zigzag cards */}
        <div className="space-y-20 lg:space-y-28">
          {atracciones.map((item, i) => (
            <AtraccionCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function AtraccionCard({
  item,
  index,
}: {
  item: (typeof atracciones)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-2xl lg:w-1/2">
        <div className="aspect-[3/2]">
          <div className={`h-full w-full bg-gradient-to-br ${item.color}`} />
          <img
            src={item.placeholder}
            alt={item.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-30"
          />
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
        <motion.h3
          className="text-2xl font-black text-foreground sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {item.title}
        </motion.h3>
        <motion.p
          className="mt-4 text-lg leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {item.text}
        </motion.p>
        <motion.a
          href="#planes"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent/80"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          Ver planes <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default AtraccionesSection;
