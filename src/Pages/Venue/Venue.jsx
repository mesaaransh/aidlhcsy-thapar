import "./Venue.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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


            <div class="VenueGrid">
                <div class="grideElement redTint div1">
                    <img src="https://lms.thapar.edu/moodle/pluginfile.php/1/theme_moove/loginbgimg/1659956381/1_Thapar_Student_Residencies.jpg" alt="" />
                </div>
                <div class="grideElement gridTextElement div2">

                    <h2>About The Venue</h2>
                    <p>Thapar Institute of Engineering and Technology, Patiala</p>
                    <hr />
                    <p>TIET, nestled in the royal city of Patiala, Punjab, stands tall as one of Northern India's premier institutes. Its verdant 250-acre campus lies just 5 km from Patiala Railway Station and 70 km from Chandigarh International Airport, offering seamless connectivity wrapped in academic grandeur.</p>
                    <button>Visit Website</button>

                </div>
                <div class="grideElement redTint div3">
                    <img src="./3.jpeg" alt="" />
                </div>
                <div class="grideElement gridTextElement div4">
                    <h2>Legacy Since <i>1956</i></h2>
                    <hr />
                    <p>Established in 1956, TIET has grown from a regional engineering college into a globally recognized institute. Over nearly seven decades, it has nurtured innovation, excellence, and leadership, cementing its legacy as a cornerstone of technical education in India.</p>

                    <button>View More</button>
                </div>
                <div class="grideElement redTint div5">
                    <img src="./5.jpeg" alt="" />
                </div>
                <div class="grideElement redTint div6">
                    <img src="./6.jpeg" alt="" />
                </div>
                <div class="grideElement gridTextElement div7">
                    <h2>Patiala</h2>
                    <p>The Royal City of Punjab</p>

                    <hr />

                    <p>
                        Patiala, the regal heart of Punjab, was founded in 1763 by Baba Ala Singh, the visionary leader of the Phulkian dynasty. Known for its opulence and royal heritage, Patiala boasts grand palaces, sprawling gardens, and rich cultural traditions. The city’s architectural jewels include the majestic Qila Mubarak, a 17th-century fort complex, and the Sheesh Mahal, adorned with intricate mirror work. Patiala is also famous for its traditional attire, turban styles, and, of course, the iconic Patiala peg. A harmonious blend of history and modernity, the city stands as a proud emblem of Punjab’s princely legacy and enduring elegance.
                    </p>
                    
                    <div className="venuePatGrid">
                        <img src="./3.jpeg" alt="" />
                        <img src="./3.jpeg" alt="" />
                        <img src="./3.jpeg" alt="" />
                        <img src="./3.jpeg" alt="" />
                    </div>
                </div>
                <div class="grideElement div9">9</div>
                <div class="grideElement div10">

                    <div style={{ height: '100%', width: '100%' }}>
                        <MapContainer center={[30.3544242, 76.36670]} zoom={15} scrollWheelZoom={true}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[30.3544242, 76.36670]}>
                            <Popup>
                                TIET
                            </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                </div>
                <div class="grideElement gridTextElement div11">
                    <h1>Ranked 29</h1>
                    <p>Among Engineering Colleges in India</p>
                </div>
                <div class="grideElement gridTextElement div12">
                    <h1>Among top 900</h1>
                    <p>Institutes in the World</p>
                </div>
            </div>


        </div>
    )
}
