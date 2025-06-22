import "./Venue.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { faArrowUpRightFromSquare, faCamera, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Venue() {

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div className="page venue">

            <div className="venueGrid">
                <div className="venueMainSection">
                    <img src="./3.jpeg" alt="" />
                    <img className="accentImage" src="./ThaparVector.png" alt="" />
                    <div>
                        <h2>About The Venue</h2>
                        <p>Thapar Institute of Engineering and Technology, Patiala</p>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio corrupti ipsam tempora quasi eligendi delectus amet asperiores a harum. Eaque a totam, unde incidunt soluta necessitatibus consequatur ea veniam, deleniti adipisci aliquid repudiandae velit rem reiciendis temporibus saepe illum fugiat explicabo. Tempore labore illum quaerat commodi nemo aut explicabo dolorum!</p>
                        <div style={{display: 'flex', gap: '20px'}}>
                            <button className="dark">Visit Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </button>
                            <button className="dark">Photo Gallery <FontAwesomeIcon icon={faCameraRetro} /> </button>
                        </div>
                    </div>
                </div>

                <div className="venueMainSection">
                    <div>
                        <h2>Patiala</h2>
                        <p>The Royal Heritage of Punjab</p>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio corrupti ipsam tempora quasi eligendi delectus amet asperiores a harum. Eaque a totam, unde incidunt soluta necessitatibus consequatur ea veniam, deleniti adipisci aliquid repudiandae velit rem reiciendis temporibus saepe illum fugiat explicabo. Tempore labore illum quaerat commodi nemo aut explicabo dolorum!</p>
                        <button className="dark">Visit Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </button>
                    </div>
                    <img src="./patiala.jpeg" alt="" />
                </div>
            </div>

            <h2>How to Reach</h2>
            <img width={'90%'} src="./London.png" alt="" />


        </div>
    )
}
