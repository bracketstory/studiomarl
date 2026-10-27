import Figure from './Figure';

const Work = () => {
  const projects = [
    {
      id: 'p1',
      art: 'arch',
      alt: 'Wide view of a residence interior with plaster arches and long raking light.',
      title: 'Casa Almendra',
      meta: 'Lisbon · Residence · 2025',
      desc: 'A 1920s apartment stripped back to its vaults, then warmed with lime plaster the colour of baked clay.',
      label: 'Casa Almendra, residence in Lisbon, 2025',
    },
    {
      id: 'p2',
      art: 'slat',
      alt: 'Timber slat screens casting banded shadows across a dining room wall.',
      title: 'Hall Nine',
      meta: 'Mumbai · Hospitality · 2024',
      desc: 'A restaurant organised around one long timber screen that changes the room with the hour.',
      label: 'Hall Nine, restaurant in Mumbai, 2024',
    },
    {
      id: 'p3',
      art: 'stone',
      alt: 'Banded travertine and laterite stacked into a monolithic bath surround.',
      title: 'The Quarry House',
      meta: 'Goa · Residence · 2023',
      desc: 'Offcut stone from a nearby quarry, laid by hand into bathing rooms that feel excavated rather than built.',
      label: 'The Quarry House, residence in Goa, 2023',
    },
    {
      id: 'p4',
      art: 'oculus',
      alt: 'Concrete room with a circular rooflight projecting a disc of sun onto the floor.',
      title: 'Oculus',
      meta: 'Bengaluru · Workspace · 2022',
      desc: 'A concrete shell with a single round opening. The disc of sun crosses the floor like a slow clock.',
      label: 'Oculus Studio, workspace in Bengaluru, 2022',
    },
    {
      id: 'p5',
      art: 'still',
      alt: 'Ceramic vessels in three glazes arranged on a stone plinth.',
      title: 'Ceramic Room',
      meta: 'Copenhagen · Gallery · 2021',
      desc: '',
      label: 'Ceramic Room, gallery in Copenhagen, 2021',
    },
  ];

  return (
    <section id="work" className="wrap">
      <div className="head rv">
        <h2>Selected work</h2>
        <p className="meta" style={{ maxWidth: '26ch', margin: 0 }}>
          Five built spaces, 2021–2026. Sample content: replace with your projects.
        </p>
      </div>
      <div className="work">
        {projects.map((project) => (
          <figure key={project.id} className={`proj ${project.id} rv`}>
            <a href="#contact" aria-label={project.label}>
              <Figure as="div" className="fig" art={project.art} alt={project.alt} arrow />
              <figcaption className="cap">
                <h3>{project.title}</h3>
                <span className="meta">{project.meta}</span>
              </figcaption>
              {project.desc && <p className="desc">{project.desc}</p>}
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Work;
