import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountdownTimer from "./CountdownTimer";
import "./Footer.css";
import { faEnvelope, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { conferenceInfo } from "../../data/conferenceData";
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer">
      {/* <section className="footerTop" aria-label="Conference Countdown">
        <h2>{conferenceInfo.name} WILL BEGIN IN</h2>
        <CountdownTimer targetDate={conferenceInfo.countdownTarget} />
      </section> */}

      <section className="footerFootnotes" aria-label="Announcements and Footnotes">
        <div className="footerFootnotesContent">
          <div className="footerFootnotesHeader">
            <FontAwesomeIcon icon={faBullhorn} className="footnoteIcon" />
            <h3>Important Announcements</h3>
          </div>
          <p>
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </section>

      <section className="footerBottom">
        <div className="col footerBrand">
          <Link to="/">
            <img
              src="/aidl-logo.png"
              alt="AIDL-HCSY Logo"
              className="footerLogo"
              style={{ height: "4.5rem", width: "auto", background: "white", borderRadius: "8px", padding: "6px" }}
            />
          </Link>
        </div>

        <div className="col">
          <nav className="icons" aria-label="Social Media Links">
            <a href="mailto:aidlhcsy-ieee@thapar.edu" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </nav>
        </div>

        <div className="col">
          © Copyright {new Date().getFullYear()} - All Rights Reserved
          <br />
          {conferenceInfo.venue}
          <br />
          <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Webmaster: Dr. Rahul Upadhyay, Mr. Kunal Gupta,<br /> Varun Gupta &amp; Krrish Sood</span>
        </div>
      </section>
    </footer>
  );
}

