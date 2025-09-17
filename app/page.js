// Dependencies:
// - app/components/Header.jsx
// - app/components/Experience.jsx
// - app/components/Skills.jsx
// - app/components/Projects.jsx
// - app/components/Education.jsx

// Home page for resume layout. Renders sections in order with Bootstrap 5 styling.

import Header from './components/Header.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';


export default function Page() {
  return (
    <main id="main" className="container py-4" role="main">
      <Header />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </main>
  );
}
