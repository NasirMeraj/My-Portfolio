import { Heart, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <span>&lt;/&gt;</span>
          Nasir Meraj
        </div>

        <p>
          Designed & built with <Heart size={15} /> by Nasir Meraj
        </p>

        <a href="#home" className="back-top">
          <ArrowUp size={18} />
        </a>

      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Nasir Meraj. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;