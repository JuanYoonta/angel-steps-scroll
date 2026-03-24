import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";

const planes = [
  {
    name: "Pasaporte Paso del Ángel",
    desc: "Toda la aventura. 25 Desafíos.",
    price: "$240.000",
    featured: false,
    features: ["25 Desafíos", "Acceso completo", "Todas las atracciones"],
  },
  {
    name: "Adrenalina Total",
    desc: "Naturaleza Extrema, Hamacas en el Cielo, Rappel.",
    price: "$210.000",
    featured: false,
    features: ["Naturaleza Extrema", "Hamacas en el Cielo", "Rappel"],
  },
  {
    name: "Montaña Extrema",
    desc: "Naturaleza Extrema, Rappel.",
    price: "$160.000",
    featured: true,
    features: ["Naturaleza Extrema", "Rappel", "Experiencia completa"],
  },
  {
    name: "Aventura en Bici",
    desc: "Naturaleza Extrema, Hamacas, Bici por las Nubes.",
    price: "$140.000",
    featured: false,
    features: ["Naturaleza Extrema", "Hamacas", "Bici por las Nubes"],
  },
  {
    name: "Aventura Total",
    desc: "Naturaleza Extrema, Péndulo, Canopy, Hamacas.",
    price: "$120.000",
    featured: false,
    features: ["Naturaleza Extrema", "Péndulo", "Canopy", "Hamacas"],
  },
];

const PlanesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="planes" className="bg-background px-6 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.4em] text-accent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Pasarela de Tickets
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-black text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Elige tu Aventura
          </motion.h2>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0">
          {planes.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`flex min-w-[260px] shrink-0 snap-center flex-col rounded-2xl border p-6 transition-shadow lg:min-w-0 ${
                plan.featured
                  ? "border-accent bg-accent/5 shadow-xl shadow-accent/10 ring-2 ring-accent"
                  : "border-border bg-card shadow-sm"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i }}
            >
              {plan.featured && (
                <div className="mb-3 flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-accent" fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>

              <p className="mt-6 text-3xl font-black text-foreground">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground"> /persona</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 flex-shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-full py-3 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] ${
                  plan.featured
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Comprar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanesSection;
