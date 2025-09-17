// Dependencies:
// - public/styles.css
// - public/brite.bootstrap.min.css
// - Font Awesome CDN
// - Bootstrap is assumed to be included via public/ or CDN

import './style.css';

export const metadata = {
  title: 'Gerald Vicks Jr. — Resume',
  description: 'Reverse-chronological, metrics-focused resume using Bootstrap 5 and semantic markup.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/Person">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

     <link
  rel="stylesheet"
  href="https://bootswatch.com/5/brite/bootstrap.min.css"
/>


        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-light text-body">
        <a
          className="visually-hidden-focusable position-absolute top-0 start-0 m-2 px-2 py-1 bg-white border rounded"
          href="#main"
        >
          Skip to content
        </a>

        {children}

        <footer className="container pb-5" role="contentinfo">
          <hr />
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 small">
            <div>
              <i className="fa-regular fa-file-lines me-1" aria-hidden="true"></i>
              Last updated: <time dateTime="2025-09-15">September 15, 2025</time>
            </div>
            <div className="text-muted">
              <span className="me-2">Print this page to save as PDF.</span>
              <i className="fa-solid fa-print" aria-hidden="true" title="Print-friendly"></i>
            </div>
          </div>
        </footer>

        {/* Optional: load any global JS modules if needed */}
        {/* <script type="module" src="/assets/main.js"></script> */}
      </body>
    </html>
  );
}
