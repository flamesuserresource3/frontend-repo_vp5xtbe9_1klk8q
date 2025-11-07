import { motion } from 'framer-motion';

const artists = [
  { name: 'Aurora High Band', time: 'Jumat • 19:00', genre: 'Indie Pop' },
  { name: 'ElectroNerds', time: 'Sabtu • 20:30', genre: 'EDM' },
  { name: 'Rimba Voices', time: 'Minggu • 17:45', genre: 'Acoustic' },
  { name: 'Cosmic Crew', time: 'Minggu • 21:00', genre: 'Alt Rock' },
];

export default function Lineup() {
  return (
    <section id="lineup" className="relative bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold md:text-4xl"
        >
          Lineup Utama
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {artists.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 backdrop-blur hover:border-white/20"
            >
              <div className="flex items-baseline justify-between">
                <p className="text-sm text-white/70">{a.time}</p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{a.genre}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold group-hover:text-fuchsia-300">{a.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
