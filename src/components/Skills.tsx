import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { featuredStack, skillGroups } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-content">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies"
          description="The stack I reach for across security, networking, software work."
        />

        {/* Featured stack badges */}
        <Reveal delay={0.05}>
          <div className="mt-12 flex flex-wrap gap-2.5">
            {featuredStack.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-3 py-2 text-sm text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
              >
                <s.icon size={16} className="text-accent" />
                {s.label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Grouped skills */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="card h-full p-5 transition-colors duration-300 hover:border-accent/30">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-muted text-accent">
                    <group.icon size={16} />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-100">{group.title}</h4>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
