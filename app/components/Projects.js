// Projects.jsx
// Renders the case study cards and demo links

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="mb-5">
      <h2 id="projects-heading" className="h4 mb-3">Projects</h2>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <article className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h6 mb-1">Mothership — Headless WP + Modular UI</h3>
              <p className="mb-2 small text-muted">Reusable boilerplate powering eCommerce, admin UI, and media tools.</p>
              <ul className="small mb-3">
                <li>Modular search system; reduced query times by <strong>~35%</strong>.</li>
                <li>JWT-secured endpoints; role-aware UI without client libraries.</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap">
                <a className="btn btn-sm btn-outline-primary" href="https://yourname.dev/mothership" rel="noopener">
                  <i className="fa-solid fa-globe me-1"></i> Case Study
                </a>
                <a className="btn btn-sm btn-outline-secondary" href="https://live-link-here.example" rel="noopener">
                  <i className="fa-solid fa-lock me-1"></i> Live Demo (Password)
                </a>
              </div>
              <p className="mt-2 mb-0 small text-muted">
                Demo Access — User: <code>portfolio</code> · Pass: <code>demo2025</code>
              </p>
            </div>
          </article>
        </div>

        <div className="col-12 col-md-6">
          <article className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h6 mb-1">Seafood Social — Woo Menu Sorter</h3>
              <p className="mb-2 small text-muted">Custom Codestar sorter with category mapping and image tooling.</p>
              <ul className="small mb-3">
                <li>Cut menu management time by <strong>72%</strong>.</li>
                <li>Improved LCP &lt; 1.8s with caching + image pipeline.</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap">
                <a className="btn btn-sm btn-outline-primary" href="https://yourname.dev/seafoodsocial" rel="noopener">
                  <i className="fa-solid fa-globe me-1"></i> Case Study
                </a>
                <a className="btn btn-sm btn-outline-secondary" href="https://live-link-here.example" rel="noopener">
                  <i className="fa-solid fa-lock me-1"></i> Live Demo (Password)
                </a>
              </div>
              <p className="mt-2 mb-0 small text-muted">
                Demo Access — User: <code>portfolio</code> · Pass: <code>demo2025</code>
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="alert alert-light border mt-3 mb-0 small" role="note">
        <i className="fa-solid fa-shield-halved me-2" aria-hidden="true"></i>
        Portfolio demos are served from an always-on Mac mini via secure tunnel. Admin access is password-protected and rotated monthly,
        reflecting standard staging practices.
      </div>
    </section>
  );
}
