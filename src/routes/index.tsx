import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Zap, Printer, FolderOpen, Layers, Monitor, ShieldCheck, Lock, Clock,
  Ban, Bolt, HeartCrack, CloudRain, Users, Flame,
  Clock3, Puzzle, ShieldCheck as ShieldIcon, Star,
  CheckCircle2, Gift, ChevronDown,
  CreditCard, QrCode, FileText, X,
} from "lucide-react";
import SocialCards from "@/components/ui/card-fan-carousel";
import mockupKit from "@/assets/mockup-kit.png";
import kitBasico from "@/assets/kit-basico.png";
import exitOffer from "@/assets/exit-offer.png";
import testimonial1 from "@/assets/testimonials/testimonial-1.png";
import testimonial2 from "@/assets/testimonials/testimonial-2.png";
import testimonial3 from "@/assets/testimonials/testimonial-3.png";
import gallery1 from "@/assets/gallery/gallery-1.jpeg";
import gallery2 from "@/assets/gallery/gallery-2.jpeg";
import gallery3 from "@/assets/gallery/gallery-3.jpeg";
import gallery4 from "@/assets/gallery/gallery-4.jpeg";
import gallery5 from "@/assets/gallery/gallery-5.jpeg";
import gallery6 from "@/assets/gallery/gallery-6.jpeg";
import gallery7 from "@/assets/gallery/gallery-7.jpeg";
import gallery8 from "@/assets/gallery/gallery-8.jpeg";
import gallery9 from "@/assets/gallery/gallery-9.jpeg";
export const Route = createFileRoute("/")({
  component: Landing,
});

function useCountdown(initialSeconds: number) {
  const [s, setS] = useState(initialSeconds);
  useEffect(() => {
    const t = setInterval(() => setS((x) => (x > 0 ? x - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    custom={delay}
    variants={fadeUp}
  >
    {children}
  </motion.div>
);

function Landing() {
  const time = useCountdown(11 * 3600 + 10 * 60 + 16);
  const [exitOpen, setExitOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    let fired = false;
    const onLeave = (e: MouseEvent) => {
      if (!fired && e.clientY < 10) { fired = true; setExitOpen(true); }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  const gallery = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9,
  ];

  const situations = [
    { icon: Ban, text: "El niño que llega y no dice nada" },
    { icon: Bolt, text: "El paciente con TDAH que no se queda quieto" },
    { icon: HeartCrack, text: "El niño que llora y quiere a su mamá" },
    { icon: CloudRain, text: "El que perdió a alguien y no sabe nombrar lo que siente" },
    { icon: Users, text: "El que vive el conflicto de la separación de los padres" },
    { icon: Flame, text: "El que tiene dificultad para controlar sus emociones y reacciona con intensidad" },
  ];

  const benefits = [
    { icon: Clock3, title: "Sesión más productiva", text: "Entras sabiendo qué vas a hacer. Sin improvisar, sin desperdiciar el tiempo de la sesión." },
    { icon: Puzzle, title: "Niño más comprometido", text: "Recursos lúdicos que despiertan la curiosidad y crean vínculo desde el primer encuentro." },
    { icon: ShieldIcon, title: "Más confianza en la sesión", text: "Tener el material correcto en la mano lo cambia todo. Entras preparada y la sesión fluye." },
    { icon: Star, title: "Alternativa a los juegos caros", text: "Recursos equivalentes a los de marcas premium por una fracción del precio. Sin comprometer la calidad." },
  ];

  const bonuses = [
    { n: "01", title: "Fichas de Anamnesis Infantil Estructuradas", text: "Modelos listos para la primera sesión con los padres. Llega preparada desde el inicio.", price: "$27,00" },
    { n: "02", title: "Guion de Devolución para Padres", text: "Scripts listos para dar feedback a los padres de forma clara y profesional. Sin trabarte al hablar.", price: "$19,00" },
    { n: "03", title: "Checklist de Planificación de Sesión", text: "Paso a paso para organizar cada sesión antes de comenzar. Nada de improvisar.", price: "$17,00" },
    { n: "04", title: "Guía de Manejo con Padres Difíciles", text: "Estrategias prácticas para lidiar con padres resistentes, exigentes o ausentes. Lo que muchas psicólogas necesitaban.", price: "$17,00" },
    { n: "05", title: "Kit de Psicoeducación Visual para Padres", text: "Materiales ilustrados para explicar ansiedad, TDAH, regulación emocional. Convierte a los padres en aliados del proceso.", price: "$17,00" },
  ];

  const depoCards = [
    { imgUrl: testimonial1, alt: "Testimonio de una psicóloga" },
    { imgUrl: testimonial2, alt: "Testimonio de una psicóloga" },
    { imgUrl: testimonial3, alt: "Testimonio de una psicóloga" },
  ];

  const faqs = [
    { q: "¿Cómo accedo al material después de la compra?", a: "En cuanto se confirme el pago, recibirás un correo con el enlace de acceso directo a la plataforma. Es rápido y fácil." },
    { q: "¿En qué formato viene el kit?", a: "Todos los materiales están en PDF, organizados en carpetas por categoría. Descargas todo de una vez o vas abriendo conforme lo necesites." },
    { q: "¿Puedo imprimirlo cuantas veces quiera?", a: "Sí. El uso es personal. Puedes imprimirlo para usarlo en tu consultorio siempre que lo necesites." },
    { q: "¿Necesito tener experiencia en psicoterapia infantil para usarlo?", a: "No. El kit fue creado justamente para quien está comenzando en el área infantil. Los recursos están listos para usar, sin necesidad de formación específica." },
    { q: "¿Funciona con niños muy resistentes?", a: "Sí. Tiene recursos específicos para crear vínculo con niños cerrados, ansiosos o que no quieren hablar. El enfoque lúdico ayuda a romper el hielo de forma natural." },
    { q: "¿Sirve para atención online también?", a: "Sí. Puedes compartir los materiales en pantalla durante la sesión online. Algunos recursos funcionan mejor de forma presencial, pero la mayoría se adapta bien." },
    { q: "¿Cómo funciona la garantía?", a: "Tienes 15 días desde la compra para pedir reembolso. Basta con contactarnos por la plataforma. El dinero vuelve íntegramente, sin preguntas." },
    { q: "¿El pago es seguro?", a: "Sí. La compra se realiza por una de las mayores plataformas de infoproductos. Acepta tarjeta de crédito, boleto y Pix." },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      {/* Top bar countdown */}
      <div className="bg-[oklch(0.62_0.22_27)] text-white text-center text-sm font-semibold py-2 px-4">
        Esta página saldrá del aire en: {time}
      </div>

      {/* HERO */}
      <section className="px-4 pt-14 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            className="chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kit Consultorio Lúdico
          </motion.span>
          <Reveal delay={1}>
            <p className="mt-6 text-ink-soft font-semibold">
              ¿Gastando en materiales terapéuticos que casi no usas?
            </p>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05]">
              <span className="text-primary">+80 recursos</span> terapéuticos listos para aplicar en tu <span className="text-primary">consultorio infantil</span>
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-6 text-ink-soft max-w-2xl mx-auto">
              Comienza con el Kit Básico e imprime desde hoy. Organizado por demanda (ansiedad, TDAH, TEA, regulación emocional, conducta, habilidades sociales).
            </p>
          </Reveal>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={mockupKit}
              alt="Kit Consultorio Lúdico Playful"
              className="max-w-full w-[820px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)] rounded-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto text-left">
            {[
              [Zap, "Acceso inmediato tras la compra"],
              [Printer, "Imprime y úsalo en la misma sesión"],
              [FolderOpen, "Organizado por demanda clínica"],
              [Layers, "+227 recursos listos para usar"],
              [Monitor, "Funciona online y presencial"],
            ].map(([Icon, label], i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 text-sm font-semibold text-ink"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {(() => { const I = Icon as typeof Zap; return <I className="w-5 h-5 text-primary shrink-0" />; })()}
                <span>{label as string}</span>
              </motion.div>
            ))}
          </div>

          <Reveal delay={2}>
            <p className="mt-10 text-ink-soft italic">
              Basta de perder horas buscando material.<br />
              Vas a tener la herramienta correcta para cada niño.
            </p>
          </Reveal>

          <motion.a
            href="#pricing"
            className="btn-primary mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Quiero mi kit ahora
          </motion.a>

          <p className="mt-6 text-xs text-ink-soft flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Garantía de 15 días</span>
            <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Pago seguro</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Acceso inmediato</span>
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-cream-alt py-20 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">Mira el kit por dentro</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-ink-soft max-w-2xl mx-auto">
              Más de 227 recursos organizados, listos para imprimir y aplicar. Cada uno pensado para situaciones reales de consultorio.
            </p>
          </Reveal>
          <div className="mt-12 relative overflow-hidden">
            <div className="flex gap-6 animate-[scroll_40s_linear_infinite]" style={{ width: "max-content" }}>
              {[...gallery, ...gallery].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Recurso ${i + 1}`}
                  className="w-56 h-72 object-cover rounded-xl shadow-card bg-white"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <motion.a
            href="#pricing"
            className="btn-primary mt-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Quiero acceder ahora
          </motion.a>
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
      </section>

      {/* SITUATIONS */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">
              Si ya te has quedado trabada en una sesión, <span className="text-primary">este kit es para ti</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-ink-soft max-w-2xl mx-auto">
              Cada recurso está pensado para una situación real. ¿Sabes ese momento en que el niño llega y no sabes por dónde empezar?
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {situations.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 bg-muted rounded-xl p-5 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="font-semibold text-ink">{text}</span>
              </motion.div>
            ))}
          </div>
          <motion.a href="#pricing" className="btn-primary mt-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            Quiero el kit completo
          </motion.a>
          <Reveal delay={1}>
            <p className="mt-8 text-sm text-ink-soft italic max-w-2xl mx-auto">
              Estas son solo algunas de las situaciones cubiertas. El kit te acompaña en las demandas más frecuentes del consultorio infantil, del primer contacto al manejo del día a día.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-cream-alt py-20 px-4">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">
              Lo que cambia cuando tienes <span className="text-primary">las herramientas correctas</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-ink-soft">Cada recurso está pensado para hacer tu trabajo más eficaz.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={i}
                className="bg-card rounded-xl p-6 text-left shadow-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
              >
                <Icon className="w-7 h-7 text-primary" />
                <h3 className="mt-4 font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{text}</p>
              </motion.div>
            ))}
          </div>
          <motion.a href="#pricing" className="btn-primary mt-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            Quiero mi kit ahora
          </motion.a>
        </div>
      </section>

      {/* URGENCY BAND */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">
              Cada sesión sin el recurso correcto <br />
              <span className="text-accent">es una sesión perdida</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 text-white/90">
              El niño que no se conecta hoy puede abandonar el proceso mañana. La mamá que no entiende lo que está ocurriendo puede cancelar el acompañamiento. Mereces entrar a la sesión con estructura, no con la esperanza de que salga bien.
            </p>
          </Reveal>
          <motion.a href="#pricing" className="btn-outline mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            Quiero estructura en mis sesiones
          </motion.a>
          <div className="mt-8 flex justify-center gap-6 flex-wrap text-sm text-white/90">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Acceso inmediato</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Garantía de 15 días</span>
            <span className="flex items-center gap-2"><Lock className="w-4 h-4" /> Pago seguro</span>
          </div>
        </div>
      </section>

      {/* CONTENTS + BONUSES */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black text-center">
              Todo lo que <span className="text-primary">vas a recibir</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-[280px_1fr] gap-8 items-center">
            <motion.img
              src={mockupKit}
              alt="Kit Consultorio Lúdico"
              className="w-full rounded-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <Reveal delay={1}>
              <h3 className="text-xl font-black">Kit Consultorio Lúdico</h3>
              <p className="text-primary font-black text-lg">+227 recursos terapéuticos</p>
              <ul className="mt-4 space-y-2">
                {[
                  "Juegos de emociones y barajas de sentimientos para crear vínculo",
                  "Actividades proyectivas organizadas por demanda clínica",
                  "Dinámicas de vínculo para primeras sesiones y niños resistentes",
                  "Fichas de manejo conductual listas para imprimir",
                  "Materiales de psicoeducación para entregar a los padres",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-12 text-sm text-ink-soft">
              Y no termina ahí. En el kit completo, además recibes 5 bonos que complementan el kit y resuelven las mayores dificultades del día a día clínico:
            </p>
          </Reveal>

          <div className="mt-4 inline-block bg-accent text-accent-foreground font-black text-xs tracking-widest px-4 py-2 rounded-md">
            5 BONOS EXCLUSIVOS
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {bonuses.map((b, i) => (
              <motion.div
                key={b.n}
                className="bg-muted rounded-xl p-5 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-black flex items-center justify-center shrink-0">
                  {b.n}
                </div>
                <div>
                  <h4 className="font-bold">{b.title}</h4>
                  <p className="text-sm text-ink-soft mt-1">{b.text}</p>
                  <p className="mt-2 text-sm">
                    <span className="line-through text-danger mr-2">De {b.price}</span>
                    <span className="text-success font-black">GRATIS</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <motion.a href="#pricing" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              Quiero el kit completo
            </motion.a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — FAN CAROUSEL */}
      <section className="bg-cream-alt py-20 px-4 overflow-hidden">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <span className="chip">Lo que están diciendo</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 text-3xl md:text-4xl font-black">Psicólogas que ya usan el kit</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-ink-soft">Resultados reales de quienes aplicaron los recursos en las sesiones.</p>
          </Reveal>

          <div className="mt-16">
            <SocialCards cards={depoCards} />
          </div>

          <Reveal>
            <p className="mt-12 text-sm text-ink-soft italic">
              Oferta por tiempo limitado. Asegura el tuyo antes de que termine.
            </p>
          </Reveal>
          <a href="#pricing" className="mt-4 inline-flex flex-col items-center text-primary font-bold">
            Ver oferta
            <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            className="inline-block bg-[oklch(0.62_0.22_27)] text-white font-bold text-sm px-5 py-2 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            OFERTA VÁLIDA HASTA: {time}
          </motion.div>
          <Reveal>
            <h2 className="mt-6 text-3xl md:text-4xl font-black">Elige tu kit</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-ink-soft max-w-xl mx-auto">
              Los dos kits dan acceso inmediato. La diferencia está en cuánto quieres resolver de una vez.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-6 items-start text-left">
            {/* Basic */}
            <motion.div
              className="bg-card rounded-2xl border-2 border-border p-8 shadow-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-center text-primary font-black tracking-wider">KIT BÁSICO</h3>
              <img src={kitBasico} alt="Kit Básico" className="mx-auto my-6 w-56 rounded-xl" />
              <p className="text-center text-sm text-ink-soft line-through">De USD $24,90</p>
              <p className="text-center">
                <span className="text-4xl font-black">USD $<span className="text-6xl">9</span>,<span className="text-2xl">90</span></span>
              </p>
              <p className="text-center text-sm text-ink-soft">Pago único</p>
              <motion.a
                href="https://pay.wiapy.com/u8Lr8FTWrd"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary mt-6 w-full !bg-ink hover:!bg-ink"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Quiero el kit básico</span>
              </motion.a>
              <ul className="mt-6 space-y-2 text-sm">
                {["+80 recursos terapéuticos lúdicos", "Organizados por demanda clínica", "Acceso inmediato en PDF"].map((t, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" />{t}</li>
                ))}
              </ul>
              <div className="mt-6 border-2 border-dashed border-primary rounded-xl p-4 text-center text-sm text-primary font-semibold">
                92% eligen el kit completo — +227 recursos y +5 bonos exclusivos
                <ChevronDown className="w-4 h-4 mx-auto mt-1" />
              </div>
            </motion.div>

            {/* Complete */}
            <motion.div
              className="premium-glow relative bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 shadow-soft md:scale-105"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-black text-xs tracking-widest px-4 py-1.5 rounded-full z-10"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                MÁS VENDIDO • PREMIUM
              </motion.div>
              <div className="relative z-[1]">
              <h3 className="text-center font-black tracking-wider text-lg">KIT COMPLETO PREMIUM</h3>
              <div className="text-center mt-3">
                <span className="inline-block bg-accent text-accent-foreground font-black text-xs tracking-widest px-3 py-1 rounded-md">
                  +227 RECURSOS + 5 BONOS
                </span>
              </div>
              <img src={mockupKit} alt="Kit Completo" className="mx-auto my-4 w-64 rounded-xl" />
              <p className="text-center font-semibold">El kit completo para transformar tus sesiones</p>
              <p className="text-center text-sm text-white/70 line-through mt-3">De USD $49,90</p>
              <p className="text-center">
                <span className="text-4xl font-black">USD $<span className="text-6xl">14</span>,<span className="text-2xl">90</span></span>
              </p>
              <p className="text-center text-xs text-white/80">pago único • acceso inmediato</p>
              <p className="text-center text-accent font-black mt-2">Ahorras USD $35,00</p>
              <motion.a
                href="https://pay.wiapy.com/u8Lr8FTWrd"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary mt-6 w-full !bg-accent !text-[color:var(--accent-foreground)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Quiero el kit completo</span>
              </motion.a>
              <ul className="mt-6 space-y-2 text-sm">
                {[
                  "+227 recursos terapéuticos lúdicos",
                  "Organizados por demanda clínica",
                  "Acceso inmediato en PDF",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" />{t}</li>
                ))}
                {[
                  ["Fichas de Anamnesis Infantil", "$27,00"],
                  ["Guion de Devolución para Padres", "$19,00"],
                  ["Checklist de Planificación de Sesión", "$17,00"],
                  ["Guía de Manejo con Padres Difíciles", "$17,00"],
                  ["Kit de Psicoeducación Visual", "$17,00"],
                ].map(([t, p], i) => (
                  <li key={i} className="flex justify-between items-start gap-2 border-t border-white/15 pt-2">
                    <span className="flex gap-2"><Gift className="w-5 h-5 text-accent shrink-0" /><span className="font-semibold">{t}</span></span>
                    <span className="line-through text-white/60 text-xs">{p}</span>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>
          </div>

          <Reveal>
            <p className="mt-10 text-sm text-ink-soft max-w-2xl mx-auto">
              La mayoría de las psicólogas que compra elige el kit completo. Los bonos resuelven exactamente lo que el día a día clínico exige.
            </p>
          </Reveal>

          <div className="mt-6 flex justify-center gap-6 flex-wrap text-sm text-ink-soft">
            <span className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> Tarjeta de crédito</span>
            <span className="flex items-center gap-1"><QrCode className="w-4 h-4" /> Pix</span>
            <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> Boleto</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Compra 100% segura</span>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-cream-alt py-16 px-4">
        <div className="mx-auto max-w-4xl grid md:grid-cols-[180px_1fr] gap-8 items-center">
          <motion.div
            className="mx-auto w-40 h-40 rounded-full border-4 border-primary flex flex-col items-center justify-center text-primary font-black"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "backOut" }}
            whileHover={{ rotate: 6 }}
          >
            <span className="text-4xl leading-none">15</span>
            <span className="text-[10px] tracking-widest mt-1 text-center">DÍAS DE<br />GARANTÍA</span>
          </motion.div>
          <Reveal delay={1}>
            <h2 className="text-2xl font-black">Compra sin riesgo</h2>
            <p className="mt-3 text-ink-soft">
              Tienes 15 días para usar el kit, explorar todos los recursos y ver en la práctica lo que hace por tu sesión. Si por cualquier motivo no quedas satisfecha, basta con pedir el reembolso. Sin burocracia, sin preguntas.
            </p>
            <p className="mt-3 font-bold">El riesgo es todo nuestro. El resultado es todo tuyo.</p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black text-center">¿Aún tienes alguna duda?</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-ink-soft text-center">Respondemos las preguntas más comunes aquí.</p>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold"
                >
                  <span>{f.q}</span>
                  <span className={`w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xl transition-transform duration-300 ${faqOpen === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: faqOpen === i ? "auto" : 0, opacity: faqOpen === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-ink-soft text-sm">{f.a}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.a href="#pricing" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              Quiero mi kit ahora
            </motion.a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-black">
            Tu próxima sesión <br /><span className="text-accent">puede ser diferente</span>
          </h2>
        </Reveal>
        <motion.a href="#pricing" className="btn-outline mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          Quiero mi kit ahora
        </motion.a>
      </section>

      {/* EXIT INTENT MODAL */}
      {exitOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setExitOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-card rounded-2xl max-w-md w-full p-8 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "backOut" }}
          >
            <button onClick={() => setExitOpen(false)} className="absolute top-4 right-4 text-ink-soft z-10"><X className="w-5 h-5" /></button>
            <p className="chip">✕ Oferta especial</p>
            <h3 className="mt-4 text-2xl font-black">¡Espera! Tenemos una oferta exclusiva para ti</h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-5 flex justify-center"
            >
              <motion.img
                src={exitOffer}
                alt="Kit de Consultorio Juego"
                className="w-full max-w-[280px] rounded-xl shadow-lg"
                loading="lazy"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <p className="mt-4 text-sm text-ink-soft text-center">
              Llévate el <strong>Kit Básico por USD $5</strong> o el <strong>Kit Premium por USD $10</strong> con los 5 bonos exclusivos. Solo por hoy.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="https://pay.wiapy.com/u8Lr8FTWrd"
                target="_blank" rel="noopener noreferrer"
                className="rounded-xl border border-line p-3 text-center hover:border-ink transition-colors cursor-pointer"
              >
                <p className="text-xs text-ink-soft font-semibold">BÁSICO</p>
                <p className="line-through text-ink-soft text-xs">USD $9,90</p>
                <p className="text-2xl font-black text-ink">USD $5</p>
                <p className="mt-2 text-[11px] font-bold text-ink underline">Seleccionar</p>
              </a>
              <a
                href="https://pay.wiapy.com/u8Lr8FTWrd"
                target="_blank" rel="noopener noreferrer"
                className="rounded-xl border-2 border-primary p-3 text-center bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <p className="text-xs text-primary font-semibold">PREMIUM ⭐</p>
                <p className="line-through text-ink-soft text-xs">USD $14,90</p>
                <p className="text-2xl font-black text-primary">USD $10</p>
                <p className="mt-2 text-[11px] font-bold text-primary underline">Seleccionar</p>
              </a>
            </div>

            <p className="text-center text-xs text-ink-soft mt-4">Pago único. Acceso inmediato.</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
