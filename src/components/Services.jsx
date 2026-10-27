const Services = () => {
  const services = [
    {
      n: '01',
      title: 'Interior architecture',
      desc: 'Rebuilding rooms from the inside: structure, openings, joinery and services resolved together.',
    },
    {
      n: '02',
      title: 'Residential spaces',
      desc: 'Homes designed around how the household actually lives, not how a showroom is staged.',
    },
    {
      n: '03',
      title: 'Hospitality & commercial',
      desc: 'Restaurants, hotels and workplaces with a strong atmosphere that still runs well.',
    },
    {
      n: '04',
      title: 'Spatial planning',
      desc: 'Layouts and circulation studied in model and plan before a single wall is moved.',
    },
    {
      n: '05',
      title: 'Material & furniture curation',
      desc: 'Custom pieces and sourced objects, selected to belong to the room and to each other.',
    },
    {
      n: '06',
      title: 'Design consultation',
      desc: 'A focused day or two of advice for projects that need direction, not a full commission.',
    },
  ];

  return (
    <section id="approach" className="wrap">
      <div className="head rv">
        <h2>Approach &amp; services</h2>
        <p className="meta" style={{ maxWidth: '28ch', margin: 0 }}>
          One studio, from first sketch to the last object placed.
        </p>
      </div>
      <ol className="svc rv">
        {services.map((service) => (
          <li key={service.n}>
            <span className="n meta">{service.n}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Services;
