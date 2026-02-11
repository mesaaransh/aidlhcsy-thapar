import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import {
    faBrain,
    faRobot,
    faHeartbeat,
    faComments,
    faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

import Floater from "./Floater";

export default function Home() {
    return (
        <div className="page home">

            <div className="homeContent" id="home">
                <h2>Welcome to AIDL-HCSY 2026</h2>
                <p>
                    <p>The International Conference on Artificial Intelligence and Deep Learning Methods for Human-Centric Systems (AIDL-HCSY), to be held from 18th to 20th January 2027 at the Thapar Institute of Engineering and Technology, Patiala, India, marks a significant milestone in the ongoing global conversation on responsible and transformative AI. This conference is a dedicated platform for exploring the intersection of artificial intelligence, deep learning, and the design of systems that prioritize human well-being, societal impact, and ethical alignment.</p>

                    <p>At the heart of AIDL-HCSY lies a compelling vision: to harness the power of intelligent technologies not merely for automation or performance, but to reimagine how AI can serve as a catalyst for positive change across domains. From healthcare to governance, education to cybersecurity, the conference invites researchers, practitioners, and policymakers to engage in rich dialogues and share innovations that are not only technically sound but also deeply rooted in human values.</p>

                    <p>This international gathering draws strength from a strong academic foundation. Thapar Institute of Engineering and Technology, ranked among India's top institutions, brings to the table a vibrant research ecosystem, advanced infrastructure, and a legacy of academic excellence. With over 700 active faculty researchers and 200+ doctoral candidates focused on AI and emerging technologies, the institute provides a fertile ground for collaborative exploration and impactful outcomes.</p>

                    <p>While 2027 marks the inaugural edition of AIDL-HCSY in its full-fledged conference format, the event is built upon the success of an established workshop series. Since 2018, the AIDL-HCSY workshops have been held annually in conjunction with the International Congress on Ultra Modern Telecommunications and Control Systems. These workshops have served as incubators for scholarly exchange and interdisciplinary collaboration, bringing together global voices to examine the role of AI in enhancing human experience. They addressed critical themes such as human-computer interaction, AI ethics, mental health, and smart urban systems laying the groundwork for this grander, more expansive version.</p>
                </p>

                <h3>Conference Themes</h3>
                <br />
                <ul className="themes">
                    <li>
                        Foundations of Artificial Intelligence and Knowledge-Driven Systems
                        <span><FontAwesomeIcon icon={faBrain}/></span>
                    </li>
                    <li>
                        Computer Vision and Image Intelligence for Human-Centric Applications 
                        <span><FontAwesomeIcon icon={faEye}/></span>
                    </li>
                    <li>
                        Natural Language Processing and Human-Machine Interaction 
                        <span><FontAwesomeIcon icon={faComments}/></span>
                    </li>
                    <li>
                        AI-Enabled Healthcare and Disease Diagnosis 
                        <span><FontAwesomeIcon icon={faHeartbeat}/></span>
                    </li>
                    <li>
                        Intelligent Control, Robotics, and Autonomous Systems 
                        <span><FontAwesomeIcon icon={faRobot}/></span>
                    </li>
                    <li>
                        Innovation, Entrepreneurship, and Human-Centric System Design
                        <span><FontAwesomeIcon icon={faLightbulb}/></span>
                    </li>
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

            <Floater />

        </div>
    )
}
