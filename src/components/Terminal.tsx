'use client';

import { motion, type Variants } from 'framer-motion';

type Line =
  | { type: 'cmd'; text: string }
  | { type: 'out'; text: string; accent?: boolean }
  | { type: 'gap' };

const lines: Line[] = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Daniel Nguyen — Computer Science Engineer', accent: true },
  { type: 'gap' },
  { type: 'cmd', text: 'cat specialization.txt' },
  { type: 'out', text: '• Cybersecurity   • Networks' },
  { type: 'out', text: '• Backend         • Cloud' },
  { type: 'gap' },
  { type: 'cmd', text: 'ls ~/projects' },
  { type: 'out', text: 'home-lab/   tenexa/   chat-stream/   class-gen/', accent: true },
  { type: 'gap' },
  { type: 'cmd', text: 'echo $STATUS' },
  { type: 'out', text: 'Open to security & infrastructure roles' },
];

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.16, duration: 0.3 },
  }),
};

export function Terminal() {
  return (
    <div className="card overflow-hidden shadow-card">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-white/[0.02] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-slate-500">daniel@homelab: ~</span>
      </div>

      {/* Body */}
      <motion.div
        className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      >
        {lines.map((line, i) => {
          if (line.type === 'gap') {
            return <div key={i} className="h-2" aria-hidden />;
          }
          return (
            <motion.div key={i} custom={i} variants={lineVariants} className="flex gap-2">
              {line.type === 'cmd' ? (
                <>
                  <span className="select-none text-accent">$</span>
                  <span className="text-slate-200">{line.text}</span>
                </>
              ) : (
                <span className={line.accent ? 'pl-4 text-accent-soft' : 'pl-4 text-slate-400'}>
                  {line.text}
                </span>
              )}
            </motion.div>
          );
        })}
        <motion.div custom={lines.length} variants={lineVariants} className="flex gap-2 pt-1">
          <span className="select-none text-accent">$</span>
          <span className="inline-block h-4 w-2 translate-y-0.5 bg-accent animate-blink" />
        </motion.div>
      </motion.div>
    </div>
  );
}
