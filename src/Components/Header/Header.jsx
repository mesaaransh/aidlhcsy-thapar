import "./Header.css"
import { Link } from "react-router-dom"
import HeaderSlideshow from "./HeaderSlideShow";

export default function Header() {
  return (
    <div className="header">
      <HeaderSlideshow/>
      <div className="headBottom">
        <menu>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li>Author's Area</li>
            <li><Link to='/keynotes'>Keynotes</Link></li>

            <li className="dropdown">
              <span>Organizing Committee ▾</span>
              <ul className="dropdown-menu">
                <li><Link to="./OrgCommittee">Organizing Committee</Link></li>
                <li><Link to="./SupCommittee">Supporting Committee</Link></li>
                <li><Link to="./tpc">Technical Program Committee</Link></li>
              </ul>
            </li>

            <li>Registration</li>
            <li><Link to='/venue'>Venue</Link></li>
            <li>Contact</li>
          </ul>
        </menu>
      </div>
    </div>
  );
}
