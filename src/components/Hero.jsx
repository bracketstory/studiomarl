import Figure from './Figure';

const Hero = () => {
  return (
    <div className="wrap hero">
      <div className="lead">
        <p className="meta accent">Independent interior architecture</p>
        <h1>
          <span>Spaces that</span>
          <span>hold a</span>
          <span className="in">
            point of <span className="accent">view.</span>
          </span>
        </h1>
      </div>
      <Figure
        className="fig intro-img"
        art="hero"
        alt="A plaster wall with a tall arched opening, light falling across a stone floor and a single carved stool."
      />
      <div className="intro">
        <p>
          Studio Marl designs interiors, objects and atmosphere as one continuous idea, from the plan
          down to the way a door handle feels in the hand.
        </p>
        <a className="link" href="#work">
          View selected projects{' '}
          <svg viewBox="0 0 24 10" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M0 5h22M18 1l4 4-4 4" />
          </svg>
        </a>
      </div>
      <p className="meta-pos meta">
        Plate 01<br />
        <span style={{ opacity: 0.6 }}>Casa Almendra, Lisbon, 2025</span>
      </p>
    </div>
  );
};

export default Hero;
