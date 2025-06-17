import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <div className="header">

        <div className="headTop">
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
