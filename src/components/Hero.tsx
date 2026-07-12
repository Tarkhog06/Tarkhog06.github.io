'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download, ChevronDown, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { HeroBackground } from './HeroBackground';
import { TypeCycle } from './TypeCycle';
import { siteConfig } from '@/lib/data';
import { asset } from '@/lib/utils';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      <HeroBackground />

      <div className="container-content">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          {/* Status pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Network &amp; Security Engineer @ KPMG Luxembourg
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Daniel Nguyen</span>
          </motion.h1>

          {/* Role + typed specialty */}
          <motion.p variants={item} className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">
            {siteConfig.role}
          </motion.p>
          <motion.div
            variants={item}
            className="mt-2 flex items-center gap-3 font-mono text-lg text-slate-400 sm:text-xl"
          >
            <span className="text-accent">$</span>
            <TypeCycle words={siteConfig.specialties} className="text-slate-200" />
          </motion.div>

          {/* Tagline */}
          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {siteConfig.tagline} Designing secure networks, automating deployments and shipping
            dependable systems from the metal up.
          </motion.p>

          {/* Meta */}
          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-1.5 text-sm text-slate-500"
          >
            <MapPin size={15} />
            {siteConfig.location}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href={asset(`/${siteConfig.resume}`)} download className="btn btn-ghost">
              <Download size={16} />
              Download Resume
            </a>
            <div className="flex items-center gap-1">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="btn btn-ghost h-11 w-11 !px-0"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="btn btn-ghost h-11 w-11 !px-0"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-600 transition-colors hover:text-accent sm:block"
      >
        <ChevronDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
}
