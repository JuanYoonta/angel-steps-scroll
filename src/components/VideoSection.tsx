import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="video" className="relative bg-background py-0">
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <motion.div
          className="relative aspect-video w-full overflow-hidden rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Video placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://placehold.co/1280x720/0f2419/0f2419')] bg-cover bg-center opacity-60" />
          </div>

          {/* Play button */}
          <motion.button
            className="absolute inset-0 z-10 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/90 shadow-2xl backdrop-blur-sm transition-colors hover:bg-accent sm:h-24 sm:w-24">
              <Play className="h-8 w-8 text-accent-foreground sm:h-10 sm:w-10" fill="currentColor" />
            </div>
          </motion.button>

          {/* Caption */}
          <div className="absolute bottom-6 left-6 z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
              Vive la experiencia
            </p>
            <p className="mt-1 text-lg font-bold text-primary-foreground">
              Descubre Paso del Ángel
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
