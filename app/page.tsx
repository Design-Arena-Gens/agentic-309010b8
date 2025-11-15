"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

function Section({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 px-6 md:px-10 lg:px-16 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block brutal-border bg-acid px-3 py-1 text-sm font-bold -rotate-2 shadow-hard">
      {children}
    </span>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      className={`brutal-border bg-paper p-6 md:p-8 shadow-hard ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* NAV */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="mx-4 my-4 md:mx-8 brutal-border bg-paper shadow-hard">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <Link href="#home" className="font-black text-xl md:text-2xl tracking-tight">
              dorksense
            </Link>
            <nav className="hidden md:flex gap-4 font-semibold">
              <a href="#about" className="hover:underline underline-offset-4">about</a>
              <a href="#lab" className="hover:underline underline-offset-4">lab</a>
              <a href="#gallery" className="hover:underline underline-offset-4">gallery</a>
              <a href="#contact" className="hover:underline underline-offset-4">contact</a>
            </nav>
            <a href="#contact" className="brutal-border bg-ink text-acid px-3 py-1 font-bold shadow-hard md:block hidden">
              ping
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <Section id="home" className="pt-36 bg-grid">
        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          <motion.div
            initial={{ y: 60, rotate: -2, opacity: 0 }}
            animate={{ y: 0, rotate: -2, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 17 }}
            className="md:col-span-7 brutal-border bg-acid shadow-hard p-6 md:p-10"
          >
            <Tag>neobrutalist</Tag>
            <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]">
              dork<span className="bg-ink text-acid px-3 -mx-1 brutal-border">sense</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl">
              A riot of blocks, borders, and bold motion. Where loud meets lovely.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#lab" className="brutal-border bg-ink text-acid px-4 py-2 font-bold shadow-hard hover:translate-y-[-2px] active:translate-y-[2px] transition-transform">
                enter lab
              </a>
              <a href="#gallery" className="brutal-border bg-paper px-4 py-2 font-bold shadow-hard">
                see work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 14, delay: 0.1 }}
            className="md:col-span-5 brutal-border bg-paper shadow-hard p-6 md:p-8 flex flex-col justify-between"
          >
            <div className="grid grid-cols-3 gap-3">
              {["punch","grape","sky","acid","peach","ink"].map((c,i) => (
                <div key={i} className={`aspect-square brutal-border shadow-hard bg-${c}`}></div>
              ))}
            </div>
            <p className="mt-6 text-sm">
              colors with attitude ? layouts with gravity ? interactions with bounce
            </p>
          </motion.div>
        </div>

        {/* marquee */}
        <div className="mt-10 brutal-border bg-ink text-acid overflow-hidden shadow-hard">
          <div className="marquee-lane animate-marquee whitespace-nowrap uppercase font-black text-lg md:text-2xl">
            <span className="px-6">dorksense ?</span>
            <span className="px-6">loud. playful. precise. ?</span>
            <span className="px-6">neon dreams ?</span>
            <span className="px-6">thick borders ?</span>
            <span className="px-6">hard shadows ?</span>
            <span className="px-6">dorksense ?</span>
            <span className="px-6">loud. playful. precise. ?</span>
            <span className="px-6">neon dreams ?</span>
            <span className="px-6">thick borders ?</span>
            <span className="px-6">hard shadows ?</span>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-peach/80">
            <h3 className="text-2xl font-black">Principle I</h3>
            <p className="mt-3">Form smacks function. Big, boxy, and proud of it.</p>
          </Card>
          <Card className="bg-sky/80">
            <h3 className="text-2xl font-black">Principle II</h3>
            <p className="mt-3">Color punches first. Contrast that refuses to whisper.</p>
          </Card>
          <Card className="bg-grape/80 text-white">
            <h3 className="text-2xl font-black">Principle III</h3>
            <p className="mt-3">Physics with feelings. Motion that lands with a thud.</p>
          </Card>
        </div>
      </Section>

      {/* LAB */}
      <Section id="lab" className="bg-grid">
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-2xl font-black">Interaction Studies</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[1,2,3,4].map((i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -6, rotate: i % 2 ? -2 : 2 }}
                  whileTap={{ y: 2, scale: 0.98 }}
                  className="aspect-square brutal-border bg-acid text-ink font-black text-xl shadow-hard"
                >
                  {i}
                </motion.button>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl font-black">Scroll Reveals</h3>
            <div className="mt-6 space-y-4">
              {["bold blocks","exaggerated shadows","lively grids","cheeky angles"].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 120, damping: 16, delay: i * 0.05 }}
                  className="brutal-border bg-paper px-4 py-3 shadow-hard"
                >
                  {t}
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { c: 'acid', t: 'neon memo' },
            { c: 'punch', t: 'red alert' },
            { c: 'grape', t: 'purple prose' },
            { c: 'sky', t: 'sky lines' },
            { c: 'peach', t: 'peach fuzz' },
            { c: 'ink', t: 'ink well' },
          ].map(({c, t}, i) => (
            <motion.div
              key={t}
              initial={{ scale: 0.92, rotate: i % 2 ? -2 : 2, opacity: 0 }}
              whileInView={{ scale: 1, rotate: i % 2 ? -2 : 2, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              className={`brutal-border bg-${c} p-4 md:p-6 shadow-hard flex flex-col justify-between`}
            >
              <span className="text-sm font-bold">{t}</span>
              <div className="mt-4 aspect-[4/3] brutal-border bg-paper shadow-hard" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="pb-28">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <Card className="md:col-span-2">
            <h3 className="text-2xl font-black">Say hi</h3>
            <p className="mt-3 max-w-xl">Mail a paper plane to nowhere or click this giant button.</p>
            <a href="#home" className="mt-6 inline-block brutal-border bg-ink text-acid px-6 py-3 font-black text-lg shadow-hard -rotate-2">
              launch
            </a>
          </Card>
          <Card className="bg-ink text-acid">
            <h3 className="text-2xl font-black">Coordinates</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>grid: 12 ? 12</li>
              <li>shadow: hard</li>
              <li>vibe: maximal</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 lg:px-16 py-8">
        <div className="brutal-border bg-paper shadow-hard px-4 py-3 flex items-center justify-between">
          <span className="font-semibold">? {new Date().getFullYear()} dorksense</span>
          <span className="text-sm">built with loud love</span>
        </div>
      </footer>
    </div>
  );
}
