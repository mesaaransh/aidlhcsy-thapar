import CountdownTimer from "./CountdownTimer"
import "./Footer.css"

export default function Footer() {

  const targetDate = "2026-01-07T23:59:59";

  return (
    <div className="footer">
        <div className="footerTop">
            <h2>AIDL-HCSY WILL BEGIN IN</h2>
            <CountdownTimer targetDate={targetDate} />
        </div>

        <div className="footerBottom">

            <div className="col">
              <h2>Contacts: </h2>
              <br />
              <p>Prof. John Doe</p>
              <p>Department of Electronics Engineering</p>
              <p>Thapar Institute of Engineering and Technology</p>
              <p>Patiala, Punjab, India</p>
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
