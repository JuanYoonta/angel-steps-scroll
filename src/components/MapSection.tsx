import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const MapSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-background px-6 py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Text */}
          <motion.div
            className="flex flex-col justify-center lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                Ubicación
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-black text-foreground sm:text-4xl">
              ¿Cómo llegar?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              El Paso del Ángel® se encuentra en la vereda Salitrillo, Santa Sofía – Boyacá, a solo
              23 kilómetros de Villa de Leyva.
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent/80"
            >
              <Navigation className="h-4 w-4" />
              Abrir en Google Maps
            </a>
          </motion.div>

          {/* Map iframe */}
          <motion.div
            className="overflow-hidden rounded-2xl lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5!2d-73.63!3d5.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDInMzYuMCJOIDczwrAzNyc0OC4wIlc!5e0!3m2!1ses!2sco!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Paso del Ángel"
              className="h-[350px] w-full rounded-2xl lg:h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
