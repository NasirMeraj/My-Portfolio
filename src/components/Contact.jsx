import {
  Mail,
  ArrowUpRight,
  Send,
  Code2
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">

        <div className="contact-box">

          <div className="contact-glow"></div>

          <div className="contact-content">

            <span className="contact-label">
              04. GET IN TOUCH
            </span>

            <h2>
              Let's build something
              <span> amazing together.</span>
            </h2>

            <p>
              Have a project idea, internship opportunity or just want
              to connect? Feel free to reach out.
            </p>

            <a
              href="mailto:nasirmeraj69@gmail.com"
              className="primary-btn"
            >
              Send Me a Message
              <Send size={18} />
            </a>

          </div>

          <div className="contact-links">

            <a href="mailto:nasirmeraj69@gmail.com">
              <div>
                <Mail />
              </div>

              <span>
                <small>Email</small>
                nasirmeraj69@gmail.com
              </span>

              <ArrowUpRight />
            </a>

            <a
              href="https://github.com/nasirmeraj"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Code2 />
              </div>

              <span>
                <small>GitHub</small>
                github.com
              </span>

              <ArrowUpRight />
            </a>

            <a
              href="https://www.linkedin.com/in/nasir-meraj-6a9663339?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Code2 />
              </div>

              <span>
                <small>LinkedIn</small>
                linkedin.com
              </span>

              <ArrowUpRight />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;