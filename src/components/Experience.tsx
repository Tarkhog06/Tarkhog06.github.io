import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { experiences } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-content">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="From medical-lab rollouts to enterprise software delivery and network security."
        />

        <div className="relative mt-14">
          {/* Vertical rail */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-[calc(9rem+7px)]"
            aria-hidden
          />

          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal as="li" key={exp.company} delay={i * 0.08}>
                <div className="group relative grid gap-4 pl-8 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:pl-0">
                  {/* Date (left column on desktop) */}
                  <div className="sm:pt-0.5 sm:text-right">
                    <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                  </div>

                  {/* Node */}
                  <span
                    className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent/40 bg-base transition-all duration-300 group-hover:border-accent group-hover:shadow-glow-sm sm:left-[9rem]"
                    aria-hidden
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
                  </span>

                  {/* Card */}
                  <div className="card p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/30 group-hover:shadow-glow-sm sm:ml-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold text-slate-100">{exp.company}</h3>
                      <span className="text-xs text-slate-500">{exp.location}</span>
                    </div>
                    <p className="mt-0.5 font-medium text-accent">{exp.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
