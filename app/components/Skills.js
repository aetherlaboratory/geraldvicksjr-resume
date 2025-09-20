// Dependencies:
// - app/data/skills.json

import skillsData from "../data/Skills.json";

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="mb-5">
      <h2 id="skills-heading" className="h4 mb-3">Skills</h2>
      <div className="row">
        {Object.entries(skillsData).map(([category, items], idx) => (
          <div key={idx} className="col-12 col-md-6">
            <h3 className="h6 text-uppercase text-muted">{category}</h3>
            <ul className="mb-3">
              {items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
