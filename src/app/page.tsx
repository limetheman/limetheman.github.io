import Image from 'next/image';
import { InteractiveExpertise } from '@/components/InteractiveExpertise';
import { SectionNavigation } from '@/components/SectionNavigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TypewriterIntro } from '@/components/TypewriterIntro';
import { profile } from '@/data/profile';

const Arrow = () => <span aria-hidden="true">↗</span>;

function SocialIcon({ label }: { label: string }) {
  if (label === 'GitHub') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.1 2 3 1.4 3.7 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.4-5.5-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C15.5 4.8 16.5 5 16.5 5c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.4-2.8 5.4-5.5 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z" />
      </svg>
    );
  }

  if (label === 'LinkedIn') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5.4 7.8H1.8V22h3.6V7.8ZM3.6 2A2.1 2.1 0 1 0 3.6 6.2 2.1 2.1 0 0 0 3.6 2ZM22 13.9c0-4.3-2.3-6.3-5.4-6.3a4.7 4.7 0 0 0-4.2 2.3V7.8H8.8V22h3.6v-7c0-1.9.4-3.7 2.7-3.7 2.3 0 2.3 2.1 2.3 3.8V22H22v-8.1Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6 2.5h8l4 4V22H6V2.5Zm8 1.8v3.2h3.2L14 4.3ZM8.5 11v1.5h7V11h-7Zm0 3.5V16h7v-1.5h-7Zm0 3.5v1.5h4.8V18H8.5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="Liem Tran, home">
          LT<span aria-hidden="true">/</span>
        </a>

        <SectionNavigation />

        <div className="headerActions">
          <ThemeToggle />
          <a className="headerResume" href="/LiemResume.pdf" target="_blank">
            Resume <Arrow />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroGrid">
            <div className="heroCopy">
              <h1 id="hero-title">Liem Tran</h1>
              <TypewriterIntro />

              <div className="heroActions">
                <a className="primaryAction" href="#experience">
                  See my experience <span aria-hidden="true">↓</span>
                </a>
                <a href="/LiemResume.pdf" target="_blank">
                  Read my resume <Arrow />
                </a>
              </div>

              <dl className="quickFacts">
                <div>
                  <dt>Current</dt>
                  <dd>Software Engineer @ Chewy</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>System scale</dt>
                  <dd>1M+ events / day</dd>
                </div>
                <div>
                  <dt>Business impact</dt>
                  <dd>$15M / year unlocked</dd>
                </div>
              </dl>
            </div>

            <div className="portraitColumn">
              <figure className="portrait">
                <div className="portraitImageFrame">
                  <Image
                    src="/Selfie.jpg"
                    alt="Liem Tran smiling outdoors"
                    width={720}
                    height={900}
                    priority
                  />
                </div>
              </figure>
            </div>
          </div>

          <div className="technologyRail" aria-label="Primary technologies">
            <span className="railLabel">Technologies →</span>
            {profile.primaryTechnologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        <section className="section expertise" id="skills" aria-labelledby="skills-title">
          <div className="sectionHeading">
            <h2 id="skills-title">Skills</h2>
          </div>

          <InteractiveExpertise capabilities={profile.capabilities} />
        </section>

        <section className="section experience" id="experience" aria-labelledby="experience-title">
          <div className="sectionHeading experienceHeading">
            <h2 id="experience-title">Experience</h2>
          </div>

          <div className="experienceList">
            {profile.experience.map((experience) => (
              <article className="experienceCard" key={`${experience.company}-${experience.role}`}>
                <div className="experienceMeta">
                  <div className="companyImage">
                    <Image
                      src={experience.image}
                      alt={experience.imageAlt}
                      width={180}
                      height={90}
                    />
                  </div>
                  <div>
                    <p>{experience.period}</p>
                    <span>{experience.company}</span>
                  </div>
                </div>
                <div className="experienceBody">
                  <h3>{experience.role}</h3>
                  <p>{experience.summary}</p>
                  <ul className="outcomeList">
                    {experience.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                  <ul className="experienceTech" aria-label={`${experience.role} technologies`}>
                    {experience.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section work" id="work" aria-labelledby="work-title">
          <div className="sectionHeading workHeading">
            <h2 id="work-title">Projects</h2>
          </div>

          <div className="projectList">
            {profile.projects.map((project) => (
              <article className="project" key={project.name}>
                <div className="projectTopline">
                  <span>{project.badge}</span>
                </div>
                <div className="projectImage">
                  <Image src={project.image} alt={project.imageAlt} width={640} height={440} />
                </div>
                <div className="projectBody">
                  <p className="projectRole">{project.role}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="projectHighlights" aria-label={`${project.name} highlights`}>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <ul aria-label={`${project.name} technologies`}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
                <div className="projectLinks">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label} <Arrow />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contactLayout">
            <div className="contactIntro">
              <h2 id="contact-title">Connect with me.</h2>
            </div>

            <div className="socialIconGrid" aria-label="Profile links">
              {profile.links.map((link) => (
                <a
                  className="socialCard"
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon label={link.label} />
                  <span>{link.label}</span>
                  <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.role}</p>
      </footer>
    </>
  );
}
