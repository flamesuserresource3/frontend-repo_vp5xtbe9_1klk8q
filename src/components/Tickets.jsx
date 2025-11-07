import { motion } from 'framer-motion';
import { Ticket, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Early Bird',
    price: 'Rp75.000',
    perks: ['Akses harian', 'Merch stiker', 'Antrian prioritas'],
    accent: 'from-emerald-400 to-cyan-400',
  },
  {
    name: 'VIP Pass',
    price: 'Rp150.000',
    perks: ['Akses 3 hari', 'Meet & Greet', 'Merch eksklusif'],
    accent: 'from-fuchsia-400 to-violet-400',
  },
  {
    name: 'Squad Pack',
    price: 'Rp420.000',
    perks: ['4 tiket', 'Zona duduk khusus', 'Photo booth premium'],
    accent: 'from-amber-400 to-rose-400',
  },
];

export default function Tickets() {
  return (
    <section id="tickets" className="relative bg-gradient-to-b from-black to-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold md:text-4xl"
        >
          Tiket & Paket
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${t.accent} opacity-30 blur-2xl`} />
              <div className="flex items-center gap-2">
                <Ticket size={18} className="text-white/80" />
                <p className="text-sm text-white/80">{t.name}</p>
              </div>
              <h3 className="mt-3 text-3xl font-extrabold">{t.price}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Sparkles size={14} className="text-white/60" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black shadow-md transition hover:brightness-110"
              >
                Dapatkan Tiket
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
