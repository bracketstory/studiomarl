import Figure from './Figure';

const Philosophy = () => {
  return (
    <section id="studio" className="philo">
      <div className="wrap split">
        <div className="rv">
          <p className="meta accent">Studio philosophy</p>
          <h2>
            Less about decoration. More about how a space makes you <em>feel.</em>
          </h2>
          <p>
            We begin with the morning light and the walk from the front door to the kettle. Rooms are
            shaped for the ordinary hours first, and only then for the photograph.
          </p>
          <p>
            Materials are chosen to age in public: plaster that takes a fingerprint, timber that darkens,
            stone that wears a soft path.
          </p>
          <dl>
            <div>
              <dt>Space</dt>
              <dd>Proportion and sequence before furniture.</dd>
            </div>
            <div>
              <dt>Material</dt>
              <dd>Few, honest, and left visibly worked.</dd>
            </div>
            <div>
              <dt>Light</dt>
              <dd>Drawn like a wall, planned from day one.</dd>
            </div>
            <div>
              <dt>Daily life</dt>
              <dd>Every detail tested against use.</dd>
            </div>
          </dl>
        </div>
        <Figure
          className="fig rv"
          art="detail"
          alt="Close detail of a lime-washed wall meeting a curved stone sill in raking light."
        />
      </div>
    </section>
  );
};

export default Philosophy;
