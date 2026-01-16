export default function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="small">© {year} {name}. Built with React.</div>
        <a className="small link" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
