import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Mail, Phone, Ticket, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" className="bg-nature-deep px-6 py-24">
      <div ref={ref} className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.4em] text-accent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Reserva tu experiencia
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-black text-nature-deep-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Contáctanos
          </motion.h2>
        </div>

        <motion.form
          className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-nature-deep-foreground/15 bg-nature-deep-foreground/5 px-4 py-3">
              <User className="h-4 w-4 flex-shrink-0 text-accent" />
              <input
                type="text"
                placeholder="Nombre"
                className="w-full bg-transparent text-sm text-nature-deep-foreground placeholder:text-nature-deep-foreground/40 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-nature-deep-foreground/15 bg-nature-deep-foreground/5 px-4 py-3">
              <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-sm text-nature-deep-foreground placeholder:text-nature-deep-foreground/40 focus:outline-none"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-nature-deep-foreground/15 bg-nature-deep-foreground/5 px-4 py-3">
              <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full bg-transparent text-sm text-nature-deep-foreground placeholder:text-nature-deep-foreground/40 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-nature-deep-foreground/15 bg-nature-deep-foreground/5 px-4 py-3">
              <Ticket className="h-4 w-4 flex-shrink-0 text-accent" />
              <input
                type="number"
                min={1}
                placeholder="Cantidad de tickets"
                className="w-full bg-transparent text-sm text-nature-deep-foreground placeholder:text-nature-deep-foreground/40 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            <Send className="h-4 w-4" />
            Reservar
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
