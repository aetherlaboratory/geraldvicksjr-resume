// Skills.jsx
// Lists ATS-friendly core and tool-based skills

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="mb-5">
      <h2 id="skills-heading" className="h4 mb-3">Skills</h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <h3 className="h6 text-uppercase text-muted">Core</h3>
          <ul className="mb-3">
            <li>WordPress (themes, plugins), WooCommerce</li>
            <li>PHP, HTML5, CSS3, Bootstrap 5</li>
            <li>Accessibility (WCAG), SEO, Performance</li>
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <h3 className="h6 text-uppercase text-muted">Tools &amp; Process</h3>
          <ul className="mb-3">
            <li>Git, GitHub, CI/CD (static deploy, previews)</li>
            <li>Headless CMS, REST APIs, JWT</li>
            <li>UX writing, component libraries, design systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
