import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";
import { portfolio } from "./data/portfolio.js";

export default function App() {
  const { person, projects, skills } = portfolio;

  return (
    <div className="app">
      <Navbar name={person.name} />

      <main>
        <Hero person={person} />

        <Section
          id="projects"
          title="Projects"
          subtitle="Real stuff I built. Click to see code + live demos."
        >
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          title="Skills"
          subtitle="What I use to build, ship, and maintain products."
        >
          <div className="skills">
            {skills.map((group) => (
              <div className="card" key={group.category}>
                <h3 className="cardTitle">{group.category}</h3>
                <ul className="chips">
                  {group.items.map((s) => (
                    <li className="chip" key={s}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="about"
          title="About"
          subtitle=""
        >
          <div className="card">
            <p className="text">
              {person.about}
            </p>

            <div className="aboutMeta">
              <div>
                <div className="metaLabel">Based in</div>
                <div className="metaValue">{person.location}</div>
              </div>
              <div>
                <div className="metaLabel">Focus</div>
                <div className="metaValue">{person.focus}</div>
              </div>
              <div>
                <div className="metaLabel">Open to</div>
                <div className="metaValue">{person.openTo}</div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="If you’re hiring, let’s talk."
        >
          <div className="contact">
            <a className="btn primary" href={`mailto:${person.email}`}>
              Email me
            </a>
            <a className="btn" href={person.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn" href={person.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {person.links.resume && (
              <a className="btn" href={person.links.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            )}
          </div>

          <p className="small">
           
          </p>
        </Section>
      </main>

      <Footer name={person.name} />
    </div>
  );
}
