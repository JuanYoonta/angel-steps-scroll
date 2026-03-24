import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Experiencia", href: "#video" },
  { label: "Atracciones", href: "#atracciones" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-nature-deep/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-primary-foreground">
          <Mountain className="h-7 w-7 text-accent" />
          <span className="font-display text-lg font-bold tracking-wide">
            Paso del Ángel
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#planes"
          className="hidden rounded-full bg-accent px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-transform hover:scale-105 md:inline-block"
        >
          Reservar
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute inset-x-0 top-full bg-nature-deep/95 backdrop-blur-md md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-medium uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#planes"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground"
                >
                  Reservar
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
