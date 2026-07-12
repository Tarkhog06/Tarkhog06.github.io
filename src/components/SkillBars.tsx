'use client';

import { motion } from 'framer-motion';
import { skillBars } from '@/lib/data';

/** Proficiency bars that fill from 0 to their level when scrolled into view. */
export function SkillBars() {
  return (
    <div className="space-y-5">
      {skillBars.map((skill, i) => (
        <div key={skill.label}>
          <div className="mb-2 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <skill.icon size={16} className="text-accent" />
              {skill.label}
            </span>
            <span className="font-mono text-xs text-slate-500">{skill.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.04]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-deep via-accent to-accent-soft"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              transition={{ duration: 1, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
