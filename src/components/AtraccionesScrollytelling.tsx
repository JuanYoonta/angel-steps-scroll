import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import puenteCristal from "@/assets/puente-cristal.jpg";
import canopy from "@/assets/canopy.jpg";
import biciNubes from "@/assets/bici-nubes.jpg";

const atracciones = [
  {
    tag: "Desafío 01",
    title: "Caminas por el filo de la montaña",
    text: "Atrévete a cruzar el Puente de Cristal, un desafío de 35 cm sobre el filo de la montaña. O supera nuestros 5 Puentes Tibetanos.",
    image: puenteCristal,
    alt: "Puente de cristal sobre el cañón",
  },
  {
    tag: "Desafío 02",
    title: "Cruzas senderos aéreos",
    text: "Siente la adrenalina en la Malla Catamarán suspendida a 200 metros sobre el río Moniquirá, o cruza el Canopy de 230 metros.",
    image: canopy,
    alt: "Canopy sobre el cañón del río",
  },
  {
    tag: "Desafío 03",
    title: "Pedaleas suspendido en el viento",
    text: "Bici por las Nubes y Péndulo Paso al Vacío. Descubre que el mayor desafío es dar el primer paso.",
    image: biciNubes,
    alt: "Bicicleta suspendida por las nubes",
  },
];

const AtraccionesScrollytelling = () => {
  const containerRef = useRef<HTMLDiv>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, atracciones.length - 1]);

  return (
    <section ref={containerRef} className="relative bg-background" style={{ height: `${(atracciones.length + 1) * 100}vh` }}>
      {/* Section title */}
      <div className="sticky top-0 z-10 flex h-screen items-center">
        <div className="flex w-full flex-col lg:flex-row">
          {/* Sticky image side */}
          <div className="relative h-[50vh] w-full overflow-hidden lg:h-screen lg:w-1/2">
            {atracciones.map((a, i) => (
              <ImageSlide key={i} index={i} progress={activeIndex} src={a.image} alt={a.alt} />
            ))}
          </div>

          {/* Scrolling text side */}
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="flex h-screen items-center px-6 lg:px-16">
              <div>
                <motion.span
                  className="text-xs font-semibold uppercase tracking-[0.4em] text-accent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Experiencias
                </motion.span>
                <h2 className="mt-4 text-3xl font-black text-foreground sm:text-5xl">
                  Naturaleza Extrema
                </h2>
                <p className="mt-2 text-lg font-light text-muted-foreground">
                  12 Desafíos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll triggers — positioned absolutely to drive scroll */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {atracciones.map((a, i) => (
          <ScrollCard key={i} index={i} total={atracciones.length} atraccion={a} />
        ))}
      </div>
    </section>
  );
};

function ImageSlide({
  index,
  progress,
  src,
  alt,
}: {
  index: number;
  progress: any;
  src: string;
  alt: string;
}) {
  const opacity = useTransform(progress, [index - 0.5, index, index + 0.5], [0, 1, 0]);

  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      width={1024}
      height={1024}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ opacity }}
    />
  );
}

function ScrollCard({
  index,
  total,
  atraccion,
}: {
  index: number;
  total: number;
  atraccion: (typeof atracciones)[0];
}) {
  const topPercent = ((index + 1) / (total + 1)) * 100;

  return (
    <div
      className="absolute right-0 flex h-screen w-full items-center lg:w-1/2 pointer-events-auto"
      style={{ top: `${topPercent}%` }}
    >
      <motion.div
        className="mx-6 max-w-lg rounded-2xl border border-border bg-card/90 p-8 shadow-xl backdrop-blur-md lg:mx-16"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-30%" }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {atraccion.tag}
        </span>
        <h3 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
          {atraccion.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {atraccion.text}
        </p>
      </motion.div>
    </div>
  );
}

export default AtraccionesScrollytelling;
