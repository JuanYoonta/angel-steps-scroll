import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const MapSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-background">
      <div ref={ref} className="mx-auto max-w-6xl px-6 py-16">
        <motion.div className="mb-8 text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Ubicación</span>
          </div>
          <h2 className="mt-4 text-3xl font-black text-foreground sm:text-4xl">¿Cómo llegar?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            El Paso del Ángel® se encuentra en la vereda Salitrillo, Santa Sofía – Boyacá, a solo 23 kilómetros de Villa de Leyva.
          </p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent/80">
            <Navigation className="h-4 w-4" />
            Abrir en Google Maps
          </a>
        </motion.div>
      </div>

      {/* Full width map */}
      <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5!2d-73.63!3d5.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDInMzYuMCJOIDczwrAzNyc0OC4wIlc!5e0!3m2!1ses!2sco!4v1"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Paso del Ángel"
          className="h-[50dvh] w-full"
        />
      </motion.div>
    </section>
  );
};

export default MapSection;
