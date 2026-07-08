'use client';

import { useState } from 'react';
import type { Capability } from '@/data/profile';

type InteractiveExpertiseProps = {
  capabilities: readonly Capability[];
};

export function InteractiveExpertise({ capabilities }: InteractiveExpertiseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCapability = capabilities[activeIndex];

  return (
    <div className="expertiseConsole">
      <div className="expertiseTabs" role="tablist" aria-label="Areas of expertise">
        {capabilities.map((capability, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              aria-controls="expertise-panel"
              aria-selected={isActive}
              className={isActive ? 'expertiseTab active' : 'expertiseTab'}
              id={`expertise-tab-${index}`}
              key={capability.index}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              <span>{capability.index}</span>
              {capability.title}
              <span aria-hidden="true">{isActive ? '●' : '○'}</span>
            </button>
          );
        })}
      </div>

      <article
        aria-labelledby={`expertise-tab-${activeIndex}`}
        className="expertisePanel"
        id="expertise-panel"
        role="tabpanel"
      >
        <div className="consoleBar">
          <span />
          <span />
          <span />
          <p>liem@cloud:~</p>
        </div>
        <div className="consoleContent">
          <p className="consolePrompt">$ explore --skill &quot;{activeCapability.title}&quot;</p>
          <h3>{activeCapability.title}</h3>
          <p>{activeCapability.description}</p>
          <div className="experienceProof">
            <span>Used in practice</span>
            <p>{activeCapability.evidence}</p>
          </div>
          <div className="systemMap" aria-hidden="true">
            <span>request</span>
            <i>→</i>
            <strong>{activeCapability.technologies[0]}</strong>
            <i>→</i>
            <span>reliable result</span>
          </div>
          <ul aria-label={`${activeCapability.title} technologies`}>
            {activeCapability.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
