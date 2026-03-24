import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Experiencia", href: "#video" },
  { label: "Atracciones", href: "#atracciones" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"ES" | "EN">("ES");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Left: Language selector */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLang("ES")}
              className={`px-2 py-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
                lang === "ES" ? "text-accent" : "text-primary-foreground/50 hover:text-primary-foreground"
              }`}
            >
              ES
            </button>
            <span className="text-primary-foreground/30">|</span>
            <button
              onClick={() => setLang("EN")}
              className={`px-2 py-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
                lang === "EN" ? "text-accent" : "text-primary-foreground/50 hover:text-primary-foreground"
              }`}
            >
              EN
            </button>
          </div>

          {/* Center: Logo */}
          <a href="#hero" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-display text-lg font-bold tracking-wide text-primary-foreground">
              PASO DEL ÁNGEL
            </span>
          </a>

          {/* Right: Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] text-primary-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex items-center justify-center bg-nature-deep/98 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.ul
              className="flex flex-col items-center gap-8"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 30 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl font-bold uppercase tracking-wider text-primary-foreground/80 transition-colors hover:text-accent sm:text-5xl"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 30 } }}
                transition={{ duration: 0.4 }}
              >
                <a
                  href="#planes"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-block rounded-full bg-accent px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-transform hover:scale-105"
                >
                  Reservar
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
