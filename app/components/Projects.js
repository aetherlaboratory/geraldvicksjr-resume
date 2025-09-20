// Dependencies:
// - app/data/projects.json

import projectsData from "../data/Projects.json";

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="mb-5">
      <h2 id="projects-heading" className="h4 mb-3">Projects</h2>

      <div className="row g-3">
        {projectsData.map((proj, idx) => (
          <div key={idx} className="col-12 col-md-6">
            <article className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h6 mb-1">{proj.title}</h3>
                <p className="mb-2 small text-muted">{proj.description}</p>

                <ul className="small mb-3">
                  {proj.bullets.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>

                <div className="d-flex gap-2 flex-wrap">
                  {proj.links.map((link, i) => (
                    <a
                      key={i}
                      className={`btn btn-sm ${link.style}`}
                      href={link.url}
                      rel="noopener"
                    >
                      <i className={`${link.icon} me-1`}></i> {link.label}
                    </a>
                  ))}
                </div>

                <p className="mt-2 mb-0 small text-muted">
                  Demo Access — User: <code>{proj.access.user}</code> · Pass:{" "}
                  <code>{proj.access.pass}</code>
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div
        className="alert alert-light border mt-3 mb-0 small"
        role="note"
      >
        <i className="fa-solid fa-shield-halved me-2" aria-hidden="true"></i>
        Portfolio demos are served from an always-on Mac mini via secure tunnel.
        Access is password-protected and rotated monthly, reflecting
        standard staging practices.
      </div>
    </section>
  );
}
