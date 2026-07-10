'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
] as const;

export function SectionNavigation() {
  const [activeId, setActiveId] = useState<(typeof sections)[number]['id'] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);

        if (activeEntry) {
          setActiveId(activeEntry.target.id as (typeof sections)[number]['id']);
        }
      },
      { rootMargin: '-35% 0px -55%', threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navigation" aria-label="Primary navigation">
      {sections.map(({ id, label }) => (
        <a
          aria-current={activeId === id ? 'location' : undefined}
          className={activeId === id ? 'active' : undefined}
          href={`#${id}`}
          key={id}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
