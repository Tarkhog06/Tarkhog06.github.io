'use client';

import Link from 'next/link';
import { ArrowUpRight, Lock } from 'lucide-react';
import { GithubIcon } from './icons';
import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/i18n/context';

/**
 * A single project card. Featured projects render wider (spanning two columns)
 * with a horizontal layout on large screens. Hover lifts the card and reveals a
 * faint cyan spotlight; the whole card is clickable when a case study exists.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.slug];
  const { icon: Icon, featured } = project;
  const href = project.caseStudy;
  const isLinked = Boolean(href);

  const CardTag = isLinked ? Link : 'div';
  const cardProps = isLinked ? { href: href! } : {};

  return (
    <CardTag
      {...(cardProps as { href: string })}
      className={cn(
        'card group relative flex flex-col overflow-hidden p-6 transition-all duration-300',
        'hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow-sm',
        featured && 'md:col-span-2 lg:flex-row lg:items-stretch lg:gap-8',
      )}
    >
      {/* Hover spotlight */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at 30% 0%, rgba(34,211,238,0.08), transparent 40%)',
        }}
        aria-hidden
      />

      {/* Featured left rail / icon */}
      <div className={cn('relative flex items-start justify-between', featured && 'lg:w-64 lg:flex-none lg:flex-col')}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-accent-muted text-accent">
          <Icon size={22} />
        </div>
        <div className={cn('text-right', featured && 'lg:mt-auto lg:pt-6 lg:text-left')}>
          <p className="font-mono text-xs uppercase tracking-wider text-accent/80">{copy.category}</p>
          <p className="mt-1 font-mono text-xs text-slate-500">{project.year}</p>
        </div>
      </div>

      {/* Body */}
      <div className="relative mt-5 flex flex-1 flex-col lg:mt-0">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-slate-100 transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          {isLinked && (
            <ArrowUpRight
              size={18}
              className="text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          )}
        </div>
        <p className="mt-0.5 text-sm text-slate-400">{copy.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{copy.description}</p>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="mt-6 flex items-center gap-4 pt-2">
          {href && (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              {t.projects.caseStudy}
              <ArrowUpRight size={15} />
            </span>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-accent"
            >
              <GithubIcon size={15} />
              {t.projects.code}
            </a>
          )}
          {project.access === 'private' && !project.repo && (
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
              <Lock size={14} />
              {t.projects.private}
            </span>
          )}
        </div>
      </div>
    </CardTag>
  );
}
