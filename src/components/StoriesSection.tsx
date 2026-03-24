import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

const stories = [
  { id: 1, label: "Aventura en el Puente de Cristal", color: "from-slate-800 to-slate-900" },
  { id: 2, label: "Canopy sobre el cañón", color: "from-emerald-900 to-slate-900" },
  { id: 3, label: "Bici por las Nubes", color: "from-amber-900 to-slate-900" },
];

const StoriesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-background px-6 py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <motion.span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
            Testimonios
          </motion.span>
          <motion.h2 className="mt-4 text-3xl font-black text-foreground sm:text-5xl" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            Historias de Aventura
          </motion.h2>
        </div>

        {/* Accordion-style video row */}
        <div className="flex h-[60vh] gap-3 sm:gap-4">
          {stories.map((story, i) => {
            const isHovered = hoveredId === story.id;
            const hasHover = hoveredId !== null;
            return (
              <motion.div
                key={story.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
                onMouseEnter={() => setHoveredId(story.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? {
                  opacity: 1,
                  y: 0,
                  flex: isHovered ? 3 : hasHover ? 1 : 1,
                } : { opacity: 0, y: 40 }}
                transition={{
                  opacity: { duration: 0.7, delay: 0.15 * i },
                  y: { duration: 0.7, delay: 0.15 * i },
                  flex: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                <div className={`h-full w-full bg-gradient-to-b ${story.color}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/80"
                    animate={{ scale: isHovered ? 1.15 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="h-6 w-6 text-accent-foreground" fill="currentColor" />
                  </motion.div>
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-primary-foreground">{story.label}</p>
                  <p className="mt-1 text-xs text-primary-foreground/60">@pasodelangel</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
