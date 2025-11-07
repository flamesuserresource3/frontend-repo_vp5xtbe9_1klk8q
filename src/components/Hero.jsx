import { motion } from 'framer-motion';
import { Music, Calendar, Ticket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WLr2O4qzj7m0Gg9Y/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-24 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <Calendar size={14} />
          21–23 Juni 2025 • Jakarta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="font-display bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-5xl font-extrabold leading-tight text-transparent drop-shadow md:text-7xl"
        >
          HARMONI SMA 2025
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-4 max-w-2xl text-balance text-base text-white/80 md:text-lg"
        >
          Festival musik dan konser pelajar paling seru dengan nuansa neon futuristik. Kolaborasi band SMA,
          penampilan spesial, dan pengalaman interaktif 3D.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#tickets"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
          >
            <Ticket size={18} />
            Beli Tiket
          </a>
          <a
            href="#lineup"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Music size={18} />
            Lihat Lineup
          </a>
        </motion.div>
      </div>
    </section>
  );
}
