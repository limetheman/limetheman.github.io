'use client';

import { useEffect, useState } from 'react';

const phrases = [
  'reliable backend systems.',
  'cloud infrastructure.',
  'distributed services.',
  'event-driven architecture.',
  'search experiences.',
] as const;

export function TypewriterIntro() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const phrase = phrases[phraseIndex];
    const isComplete = text === phrase;
    const isEmpty = text.length === 0;
    const delay = isComplete && !isDeleting ? 1500 : isDeleting ? 35 : 70;

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        setPhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length);
        return;
      }

      setText((currentText) =>
        isDeleting ? currentText.slice(0, -1) : phrase.slice(0, currentText.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, text]);

  return (
    <p className="introduction" aria-label={`I build ${phrases.join(' I also build ')}`}>
      <span className="typewriterAnimated" aria-hidden="true">
        I build <strong>{text}</strong>
        <span className="typewriterCursor">|</span>
      </span>
      <span className="typewriterFallback" aria-hidden="true">
        I build <strong>{phrases[0]}</strong>
      </span>
    </p>
  );
}
