export default function Navbar({ name }) {
  const items = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="nav">
      <div className="navInner">
        <a className="brand" href="#top" aria-label="Go to top">
          {name}
        </a>

        <nav className="navLinks" aria-label="Primary">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="navLink">
              {i.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
