import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/lib/data';

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-content">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A mix of self-hosted infrastructure, cloud platforms and systems programming. The Home Lab has a full case study."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08} className={project.featured ? 'md:col-span-2' : ''}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
