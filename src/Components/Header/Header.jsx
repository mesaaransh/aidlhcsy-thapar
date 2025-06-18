import { Link } from "react-router-dom"
import "./Header.css"
import { Parallax } from "react-parallax"

export default function Header() {
  return (
    <div className="header">

        <Parallax 
            blur={{ min: -15, max: 15 }}
            bgImage={'https://lms.thapar.edu/moodle/pluginfile.php/1/theme_moove/loginbgimg/1659956381/1_Thapar_Student_Residencies.jpg'}
            bgImageAlt="Thapar"
            bgClassName="headerTopImage"
            strength={-200}
            className="headTop"
        >
        <div className="headerTopContent">
            <h1>AIDL - HCSY 2026</h1>
            <h3>International Conference on <br /> Artificial Intelligence and Deep Learning Methods for Human-Centric Systems</h3>
            <hr />
            <div className="dtv">
                <h3>8-10 January 2025 | TIET, Patiala, India</h3>
            </div>

            <div className="buttonGroup">
                <button className="dark">About Us</button>
                <button className="light">Important Dates</button>
            </div>
        </div>

        </Parallax>

        <div className="headBottom">

            <menu>
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li>Author's Area</li>
                    <li><Link to='/committee'>Organizing Committee</Link></li>
                    <li>Registration</li>
                    <li><Link to='venue'>Venue</Link></li>
                    <li>Contact</li>
                </ul>
            </menu>
            
        </div>
    
    </div>
  )
}
