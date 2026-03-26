import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-nature-deep px-6 py-16">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img src={logo} alt="Paso del Ángel" className="h-[120px] w-auto object-contain" />
          <p className="mt-4 text-sm leading-relaxed text-nature-deep-foreground/60">
            Parque de Aventura en Santa Sofía, Boyacá. Vive la naturaleza extrema a solo 23 km de
            Villa de Leyva.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-nature-deep-foreground">
            Enlaces
          </h4>
          <ul className="mt-4 space-y-2.5">
            {["Atracciones", "Planes", "Galería", "EcoParque El Hayal", "Política de privacidad", "Términos y condiciones"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-nature-deep-foreground/60 transition-colors hover:text-accent"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-nature-deep-foreground">
            Contacto
          </h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="mailto:info@pasodelangel.com"
                className="flex items-center gap-2 text-sm text-nature-deep-foreground/60 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@pasodelangel.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/pasodelangel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-nature-deep-foreground/60 transition-colors hover:text-accent"
              >
                <Instagram className="h-4 w-4 flex-shrink-0" />
                @pasodelangel
              </a>
            </li>
            <li>
              <a
                href="tel:+573183337190"
                className="flex items-center gap-2 text-sm text-nature-deep-foreground/60 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                318 333 7190
              </a>
            </li>
            <li>
              <a
                href="tel:+573176478458"
                className="flex items-center gap-2 text-sm text-nature-deep-foreground/60 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                317 647 8458
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-nature-deep-foreground/60">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
              Vereda Salitrillo, Santa Sofía – Boyacá
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 h-px w-full bg-nature-deep-foreground/10" />

      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-nature-deep-foreground/40">
          © {new Date().getFullYear()} El Paso del Ángel®. Todos los derechos reservados
        </p>
        <p className="text-xs text-nature-deep-foreground/40">
          Hecho con ♥ en Boyacá, Colombia
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
