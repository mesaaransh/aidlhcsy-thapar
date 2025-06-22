import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Home.css"
import { faCalendar, faCalendarDays, faLeaf } from "@fortawesome/free-solid-svg-icons"
import { faGrav, faInstagram } from "@fortawesome/free-brands-svg-icons"

import {
    faBrain,
    faUsers,
    faRobot,
    faBookOpen,
    faHeartbeat,
    faBalanceScale,
    faPalette,
    faCity,
    faShieldAlt,
    faComments,
    faChartLine,
    faUniversity,
    faGlobe,
    faSearch,
    faCogs,
    faBolt,
    faUserShield,
    faMicrochip,
    faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons/faHandHoldingHeart";

export default function Home() {
    return (
        <div className="page home">

            <div className="homeContent">
                <h2>Welcome to AIDL-HCSY 2026</h2>
                <p>
                    The International Conference on Artificial Intelligence and Deep Learning Methods for Human-Centric Systems (AIDL-HCSY), to be held from 8th to 10th January 2026 at the Thapar Institute of Engineering and Technology, Patiala, India, marks a significant milestone in the ongoing global conversation on responsible and transformative AI. This conference is a dedicated platform for exploring the intersection of artificial intelligence, deep learning, and the design of systems that prioritize human well-being, societal impact, and ethical alignment.
                    <br />
                    <br />
                    At the heart of AIDL-HCSY lies a compelling vision: to harness the power of intelligent technologies not merely for automation or performance, but to reimagine how AI can serve as a catalyst for positive change across domains. From healthcare to governance, education to cybersecurity, the conference invites researchers, practitioners, and policymakers to engage in rich dialogues and share innovations that are not only technically sound but also deeply rooted in human values.
                    <br />
                    <br />
                    This international gathering draws strength from a strong academic foundation. Thapar Institute of Engineering and Technology, ranked among India's top institutions, brings to the table a vibrant research ecosystem, advanced infrastructure, and a legacy of academic excellence. With over 700 active faculty researchers and 200+ doctoral candidates focused on AI and emerging technologies, the institute provides a fertile ground for collaborative exploration and impactful outcomes.
                    <br />
                    <br />
                    While 2026 marks the inaugural edition of AIDL-HCSY in its full-fledged conference format, the event is built upon the success of an established workshop series. Since 2018, the AIDL-HCSY workshops have been held annually in conjunction with the International Congress on Ultra Modern Telecommunications and Control Systems. These workshops have served as incubators for scholarly exchange and interdisciplinary collaboration, bringing together global voices to examine the role of AI in enhancing human experience. They addressed critical themes such as human-computer interaction, AI ethics, mental health, and smart urban systems laying the groundwork for this grander, more expansive version.
                </p>

                <h3>Conference Themes</h3>
                <br />
                <ul className="themes">
                    <li>Knowledge-based Smart Systems <span><FontAwesomeIcon icon={faCogs} /></span></li>
                    <li>Human-Computer Interaction <span><FontAwesomeIcon icon={faUsers} /></span></li>
                    <li>Deep Learning for Image and Signal Processing <span><FontAwesomeIcon icon={faMicrochip} /></span></li>
                    <li>Deep Learning for NLP <span><FontAwesomeIcon icon={faComments} /></span></li>
                    <li>AI for Healthcare and Biomedical Applications <span><FontAwesomeIcon icon={faHeartbeat} /></span></li>
                    <li>AI in Mental Health and Cognitive Neuroscience <span><FontAwesomeIcon icon={faBrain} /></span></li>
                    <li>AI in Education and Learning Systems <span><FontAwesomeIcon icon={faBookOpen} /></span></li>
                    <li>AI Ethics, Bias, and Fairness <span><FontAwesomeIcon icon={faBalanceScale} /></span></li>
                    <li>Creative AI and Artistic Applications <span><FontAwesomeIcon icon={faPalette} /></span></li>
                    <li>AI and Public Policies, Governance, and Regulation <span><FontAwesomeIcon icon={faGrav} /></span></li>
                    <li>AI for Human Rights and Social Justice <span><FontAwesomeIcon icon={faHandHoldingHeart} /></span></li>
                    <li>AI in Digital Democracy <span><FontAwesomeIcon icon={faGlobe} /></span></li>
                    <li>AI-driven Cybersecurity <span><FontAwesomeIcon icon={faShieldAlt} /></span></li>
                    <li>Sustainable and Energy-Efficient AI Models <span><FontAwesomeIcon icon={faLeaf} /></span></li>
                    <li>AI for Smart Cities and Urban Development <span><FontAwesomeIcon icon={faCity} /></span></li>
                    <li>Business Model Canvas for Human-Centric AI <span><FontAwesomeIcon icon={faChartLine} /></span></li>
                    <li>Explainable AI and Its Applications <span><FontAwesomeIcon icon={faSearch} /></span></li>
                    <li>AI in Finance, Law, and Risk Management <span><FontAwesomeIcon icon={faUniversity} /></span></li>
                    <li>Generative AI in Human-Centered Design <span><FontAwesomeIcon icon={faRobot} /></span></li>
                    <li>AI in Corporate Governance and Compliance <span><FontAwesomeIcon icon={faUserShield} /></span></li>
                    <li>AI, Public Opinion, and Misinformation <span><FontAwesomeIcon icon={faComments} /></span></li>
                    <li>AI in Consumer Behavior and Marketing <span><FontAwesomeIcon icon={faLightbulb} /></span></li>
                    <li>AI for Behavioral and Experimental Economics <span><FontAwesomeIcon icon={faBolt} /></span></li>
                </ul>

                {/* <h2>Past Conferences</h2>
                <br />
                <div className="pastConferences">
                    <div className="conference">
                        <h1><FontAwesomeIcon icon={faCalendarDays} /></h1>
                        <h3>ICUMT 2019</h3>
                        <p>Antarctica</p>
                    </div>
                    <div className="conference">
                        <h1><FontAwesomeIcon icon={faCalendarDays} /></h1>
                        <h3>ICUMT 2019</h3>
                        <p>Atlantis, Underwater</p>
                    </div>
                    <div className="conference">
                        <h1><FontAwesomeIcon icon={faCalendarDays} /></h1>
                        <h3>ICUMT 2019</h3>
                        <p>Asguard, Milkyway</p>
                    </div>
                    <div className="conference">
                        <h1><FontAwesomeIcon icon={faCalendarDays} /></h1>
                        <h3>ICUMT 2019</h3>
                        <p>Antarctica</p>
                    </div>
                    <div className="conference">
                        <h1><FontAwesomeIcon icon={faCalendarDays} /></h1>
                        <h3>ICUMT 2019</h3>
                        <p>Antarctica</p>
                    </div>
                    <div className="conference">
                        <h1><FontAwesomeIcon icon={faCalendarDays} /></h1>
                        <h3>ICUMT 2025</h3>
                        <p>Patiala, India</p>
                    </div>
                </div> */}


                <h2>Our Sponsers</h2>

                <div className="sponsorGrid">
                    <img src="./tiet.png" alt="" />
                    <img src="./tslas.png" alt="" />
                    <img src="./IEEE.webp" alt="" />
                </div>

            </div>


            <div className="floater">
                <div className="impDates">
                    <h3>IMPORTANT DATES</h3>

                    <ul>
                        <li>Paper Submission Deadline <br /> <span>30 August 2025</span></li>
                        <li>Notification of Acceptance <br /> <span>15 October 2025</span></li>
                        <li>Camera Ready Submission <br /> <span>15 November 2025</span></li>
                        <li>Registration Deadline <br /> <span>30 November 2025</span></li>
                        <li>Conference Dates <br /> <span>8-10 January 2026</span></li>
                    </ul>
                </div>

                <div className="impDates">
                    <h3>LATEST NEWS</h3>

                    <ul>
                        <li><span>30 August 2025</span> <br /> Themes of the conference revealed </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}
