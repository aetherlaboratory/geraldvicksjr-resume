// Dependencies:
// - app/data/experience.json

import experienceData from "../data/Experience.json";

export default function Experience() {
  return (
    <section aria-labelledby="exp-heading" className="mb-5">
      <h2 id="exp-heading" className="h4 mb-3">Experience</h2>

      {experienceData.map((job, idx) => (
        <article
          key={idx}
          className="card border-0 shadow-sm mb-3"
          itemScope
          itemType="https://schema.org/JobPosting"
        >
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
              <div>
                <h3 className="h5 mb-1" itemProp="title">{job.title}</h3>
                <p className="mb-1 text-muted">
                  <span itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
                    <span itemProp="name">{job.company}</span>
                  </span> · {job.type}
                </p>
              </div>
              <div className="text-muted small">
                <time dateTime={job.startDate} itemProp="datePosted">
                  {job.startLabel}
                </time> – <time dateTime={job.endDate}>{job.endLabel}</time>
              </div>
            </div>

            <ul className="mb-2">
              {job.bullets.map((point, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>

            <div className="d-flex flex-wrap gap-2" aria-label="Technologies">
              {job.tech.map((t, i) => (
                <span key={i} className="badge rounded-pill text-bg-secondary">{t}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
