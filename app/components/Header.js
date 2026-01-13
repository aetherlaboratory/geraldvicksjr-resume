// Header.jsx
// Contains name, job title, and contact information with schema.org support

export default function Header() {
  return (
    <header className="container py-4" role="banner">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-8">
          <h1 className="h2 mb-1" itemProp="name">Gerald Vicks Jr.</h1>
          <p className="lead mb-0" itemProp="jobTitle">Freelance WordPress & Fullstack Developer</p>
          <meta itemProp="worksFor" content="Freelance" />
        </div>
        <div className="col-12 col-lg-4">
          <ul className="list-unstyled mb-0" aria-label="Contact">
            <li>
              <i className="fa-solid fa-location-dot me-2" aria-hidden="true"></i>
              <span itemProp="address">Brooklyn, NY (ET)</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope me-2" aria-hidden="true"></i>
              <a href="mailto:geraldvicksjr@gmail.com" itemProp="email">geraldvicksjr@gmail.com</a>
            </li>
            <li>
              <i className="fa-brands fa-github me-2" aria-hidden="true"></i>
              <a href="https://github.com/aetherlaboratory" rel="noopener" itemProp="url">github.com/aetherlaboratory</a>
            </li>
            <li>
              <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
              <a href="#" rel="noopener"> 1+(929) 792-2659 <small className="text-info">(6am-10pm EST)</small></a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-4 mb-0" />
    </header>
  );
}
