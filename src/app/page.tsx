import { profile } from '@/data/profile';

export default function Home() {
  return (
    <main>
      <nav className="navigation" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Liem Tran, home">
          LT<span aria-hidden="true">.</span>
        </a>
        <div className="navigationLinks">
          {profile.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Portfolio / New foundation</p>
        <h1>
          Hello, I&apos;m <span>{profile.name}.</span>
        </h1>
        <p className="introduction">{profile.summary}</p>

        <div className="status" role="note" aria-label="Website status">
          <span className="statusDot" aria-hidden="true" />
          <p>The old site has been cleared. This is a quiet starting point for the next version.</p>
        </div>
      </section>

      <footer>
        <p>{profile.role}</p>
        <p>Built from scratch, one considered layer at a time.</p>
      </footer>
    </main>
  );
}
