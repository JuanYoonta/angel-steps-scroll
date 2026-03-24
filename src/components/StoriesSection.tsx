import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

const stories = [
  { id: 1, label: "Aventura en el Puente de Cristal" },
  { id: 2, label: "Canopy sobre el cañón" },
  { id: 3, label: "Bici por las Nubes" },
];

const StoriesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-background px-6 py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.4em] text-accent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Testimonios
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-black text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Historias de Aventura
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
            >
              <div className="h-full w-full bg-gradient-to-b from-slate-800 to-slate-900" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/80 transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 text-accent-foreground" fill="currentColor" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-primary-foreground">{story.label}</p>
                <p className="mt-1 text-xs text-primary-foreground/60">@pasodelangel</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
