import Figure from './Figure';

const MaterialStudy = () => {
  return (
    <section className="study" aria-labelledby="study-h">
      <div className="wrap">
        <figure style={{ margin: 0 }}>
          <div className="strip">
            <Figure
              className="fig a rv"
              art="curve"
              alt="A curved plaster stair wall catching afternoon light."
            />
            <Figure
              className="fig b rv"
              art="stone"
              alt="Sample bands of travertine, laterite and basalt."
            />
            <Figure
              className="fig c rv"
              art="still"
              alt="Three glazed ceramic forms on a stone plinth."
            />
          </div>
          <figcaption className="rv">
            <h2 id="study-h">Material study: lime, laterite, oak.</h2>
            <p>
              Three finishes tested on the Casa Almendra stair. The plaster was burnished twice, the
              laterite left raw from the saw.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default MaterialStudy;
