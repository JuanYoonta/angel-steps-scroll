import { MapPin, Mail, Phone, Instagram } from "lucide-react";

const FooterInfo = () => (
  <footer className="bg-nature-deep px-6 py-20">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-3xl font-black text-nature-deep-foreground sm:text-4xl">
        Paso del Ángel®
      </h2>

      <div className="mx-auto mt-6 flex items-center justify-center gap-2 text-nature-deep-foreground/70">
        <MapPin className="h-4 w-4 flex-shrink-0 text-accent" />
        <p className="text-sm sm:text-base">
          Vereda Salitrillo, Santa Sofía – Boyacá, a solo 23 km de Villa de Leyva.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
        <a
          href="mailto:info@pasodelangel.com"
          className="flex items-center gap-2 text-sm text-nature-deep-foreground/70 transition-colors hover:text-accent"
        >
          <Mail className="h-4 w-4" />
          info@pasodelangel.com
        </a>
        <a
          href="https://instagram.com/pasodelangel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-nature-deep-foreground/70 transition-colors hover:text-accent"
        >
          <Instagram className="h-4 w-4" />
          @pasodelangel
        </a>
        <a
          href="tel:+573183337190"
          className="flex items-center gap-2 text-sm text-nature-deep-foreground/70 transition-colors hover:text-accent"
        >
          <Phone className="h-4 w-4" />
          318 333 7190
        </a>
      </div>

      <div className="mt-12 h-px w-full bg-nature-deep-foreground/10" />

      <p className="mt-6 text-xs text-nature-deep-foreground/40">
        © {new Date().getFullYear()} El Paso del Ángel®. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default FooterInfo;
