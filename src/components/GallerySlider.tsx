import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  src: `https://placehold.co/600x400/${
    ["2d6a4f", "1a5c4a", "5c3d1e", "1e3a5f", "9a4a1a", "3a4a5c", "4a6a2f", "6a3a1a"][i]
  }/f0f0f0?text=Galería+${i + 1}`,
  alt: `Galería ${i + 1}`,
}));

const GallerySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="relative bg-nature-deep py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              Galería
            </span>
            <h2 className="mt-2 text-3xl font-black text-nature-deep-foreground sm:text-4xl">
              Momentos Inolvidables
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-nature-deep-foreground/20 text-nature-deep-foreground/70 transition-colors hover:bg-nature-deep-foreground/10 disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-nature-deep-foreground/20 text-nature-deep-foreground/70 transition-colors hover:bg-nature-deep-foreground/10 disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {slides.map((slide) => (
          <motion.div
            key={slide.id}
            className="flex-shrink-0 snap-start overflow-hidden rounded-xl"
            whileHover={{ scale: 1.02 }}
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
      </div>
    </section>
  );
};

export default GallerySlider;
