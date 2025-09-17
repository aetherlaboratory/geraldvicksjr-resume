// Experience.jsx
// Renders reverse-chronological experience cards

export default function Experience() {
  return (
    <section aria-labelledby="exp-heading" className="mb-5">
      <h2 id="exp-heading" className="h4 mb-3">Experience</h2>

      <article className="card border-0 shadow-sm mb-3" itemScope itemType="https://schema.org/JobPosting">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
            <div>
              <h3 className="h5 mb-1" itemProp="title">WordPress Developer</h3>
              <p className="mb-1 text-muted">
                <span itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
                  <span itemProp="name">Seafood Social East</span>
                </span> · Contract
              </p>
            </div>
            <div className="text-muted small">
              <time dateTime="2025-06" itemProp="datePosted">Jun 2025</time> – <time dateTime="2025-09">Sep 2025</time>
            </div>
          </div>

          <ul className="mb-2">
            <li>Built menu sorter UI with Codestar; reduced menu update time by <strong>72%</strong>.</li>
            <li>Optimized WooCommerce templates; improved LCP to <strong>&lt;1.8s</strong> on 4G.</li>
            <li>Hardened WP security (app passwords, JWT routing); eliminated <strong>100%</strong> of auth errors in QA.</li>
          </ul>

          <div className="d-flex flex-wrap gap-2" aria-label="Technologies">
            <span className="badge rounded-pill text-bg-secondary">WordPress</span>
            <span className="badge rounded-pill text-bg-secondary">WooCommerce</span>
            <span className="badge rounded-pill text-bg-secondary">PHP</span>
            <span className="badge rounded-pill text-bg-secondary">Bootstrap</span>
            <span className="badge rounded-pill text-bg-secondary">Performance</span>
            <span className="badge rounded-pill text-bg-secondary">Security</span>
          </div>
        </div>
      </article>

      <article className="card border-0 shadow-sm mb-3" itemScope itemType="https://schema.org/JobPosting">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
            <div>
              <h3 className="h5 mb-1" itemProp="title">Frontend Developer</h3>
              <p className="mb-1 text-muted">
                <span itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
                  <span itemProp="name">Dexterity Studio</span>
                </span> · Freelance
              </p>
            </div>
            <div className="text-muted small">
              <time dateTime="2024-09" itemProp="datePosted">Sep 2024</time> – <time dateTime="2025-05">May 2025</time>
            </div>
          </div>

          <ul className="mb-2">
            <li>Delivered component library (no JS) with Bootstrap utilities; cut dev handoff cycles by <strong>40%</strong>.</li>
            <li>Implemented WCAG-compliant patterns; increased Lighthouse a11y to <strong>100</strong>.</li>
            <li>Set up static hosting + CI; reduced deploy time from hours to <strong>~3 minutes</strong>.</li>
          </ul>

          <div className="d-flex flex-wrap gap-2" aria-label="Technologies">
            <span className="badge rounded-pill text-bg-secondary">HTML5</span>
            <span className="badge rounded-pill text-bg-secondary">CSS3</span>
            <span className="badge rounded-pill text-bg-secondary">Bootstrap</span>
            <span className="badge rounded-pill text-bg-secondary">Accessibility</span>
            <span className="badge rounded-pill text-bg-secondary">CI/CD</span>
          </div>
        </div>
      </article>
    </section>
  );
}
