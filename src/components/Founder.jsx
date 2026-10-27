import Figure from './Figure';

const Founder = () => {
  return (
    <section className="wrap founder">
      <div className="split">
        <Figure
          className="fig rv"
          art="portrait"
          alt="Warm, sunlit interior with natural materials and restrained furnishings."
        />
        <div className="rv">
          <p className="meta accent">About the founder</p>
          <span className="ph">PLACEHOLDER: replace with real details</span>
          <h2>A practice built around one person's eye.</h2>
          <p>
            Founder name is a placeholder. Write two or three sentences here about how you came to
            design, what you notice first in a room, and why you work independently.
          </p>
          <p>
            Add your own philosophy, training and past roles below. Only include qualifications, awards
            and clients that are real and verifiable.
          </p>
          <ul>
            <li>
              <span>Training</span>
              <span className="accent">[Add institution and years]</span>
            </li>
            <li>
              <span>Previous practice</span>
              <span className="accent">[Add studios and roles]</span>
            </li>
            <li>
              <span>Founded Studio Marl</span>
              <span className="accent">[Add year]</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Founder;
