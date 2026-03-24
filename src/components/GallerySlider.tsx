import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  src: `https://placehold.co/600x400/${
    ["2d6a4f", "1a5c4a", "5c3d1e", "1e3a5f", "9a4a1a", "3a4a5c", "4a6a2f", "6a3a1a", "2a5a3f", "4a3a2a"][i]
  }/f0f0f0?text=Galería+${i + 1}`,
  alt: `Galería ${i + 1}`,
}));

const GallerySlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Link vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  return (
    <section ref={sectionRef} className="relative h-[100dvh] overflow-hidden bg-nature-deep">
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-center">
        <div className="mb-8 px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            Galería
          </span>
          <h2 className="mt-2 text-3xl font-black text-nature-deep-foreground sm:text-4xl">
            Momentos Inolvidables
          </h2>
        </div>

        <motion.div className="flex gap-4 px-6" style={{ x }}>
          {slides.map((slide) => (
            <motion.div
              key={slide.id}
              className="flex-shrink-0 overflow-hidden rounded-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 w-72 sm:h-80 sm:w-96">
                <div className="h-full w-full bg-gradient-to-br from-emerald-800 to-teal-900" />
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-40"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySlider;
