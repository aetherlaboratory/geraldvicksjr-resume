// Dependencies:
// - app/data/education.json

import educationData from "../data/Education.json";

export default function Education() {
  return (
    <section aria-labelledby="edu-heading" className="mb-5">
      <h2 id="edu-heading" className="h4 mb-3">Education</h2>

      {educationData.map((edu, idx) => (
        <div key={idx} className="mb-2">
          <p className="mb-1">
            <strong>{edu.institution}</strong> — {edu.program}
          </p>
          <p className="text-muted small mb-0">{edu.details}</p>
        </div>
      ))}
    </section>
  );
}
