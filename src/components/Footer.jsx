import { Instagram, Youtube, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black">
              <Music size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold">Harmoni SMA</p>
              <p className="text-xs text-white/70">Neon Youth Music Fest</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Instagram" className="transition hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="transition hover:text-white">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © 2025 Harmoni SMA. Dibuat dengan cinta oleh OSIS & Komunitas Musik.
        </div>
      </div>
    </footer>
  );
}
