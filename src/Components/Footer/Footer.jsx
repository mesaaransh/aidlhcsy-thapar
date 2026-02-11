import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountdownTimer from "./CountdownTimer"
import "./Footer.css"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  const targetDate = "2027-01-17T23:59:59";

  return (
    <div className="footer">
        <div className="footerTop">
            <h2>AIDL-HCSY WILL BEGIN IN</h2>
            <CountdownTimer targetDate={targetDate} />
        </div>

        <div className="footerBottom">

            <div className="col">
              <div className="icons">
                <FontAwesomeIcon icon={faEnvelope}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faFacebookF}/>
              </div>
            </div>

            <div className="col">
              © Copyright 2025 - All Rights Reserved
              <br />
              Thapar Institute of Engineering and Technology
            </div>

        </div>
    </div>
  )
}
