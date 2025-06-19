import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Home.css"
import { faCalendar, faCalendarDays, faLeaf } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
    return (
        <div className="page home">

            <div className="homeContent">
                <h2>Welcome to AIDL-HCSY 2026</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium fugit et dolorum perspiciatis voluptates molestias magni accusamus nemo, nulla alias? Mollitia labore odio provident est temporibus, officia cumque et voluptate repellat perferendis porro! Sint magnam rerum tempore deserunt est! Ullam explicabo ut aperiam dolorem iure? Accusantium quas reprehenderit doloribus reiciendis est cumque dolorem consequuntur et corrupti sed dolor ipsa, rerum voluptates amet ad eius doloremque voluptatum quos commodi fuga, saepe placeat. Id nemo illo beatae quibusdam sint. Natus accusamus quisquam rerum? Vel odit fugit ipsa harum. Tenetur nihil quaerat odio sed. Consequuntur nihil quidem tempore pariatur nam dolor eligendi, blanditiis ipsa, asperiores, magnam ratione quod minus? Sit expedita molestiae impedit harum veniam exercitationem nobis minima nostrum nam, adipisci officia totam eum. Tempore in ipsum alias. Enim iusto expedita ipsa saepe facilis tempora pariatur quasi, odio dolorem consequatur sequi accusantium repellat, beatae alias facere ipsum nisi quae fuga accusamus laborum officia! Ipsa ea voluptas facilis illo non modi similique repellendus nulla. Deleniti officia facilis id ut consequuntur voluptatem, optio aliquam perferendis in quis non minus quas ullam iste consequatur delectus earum! Dolor quos repellat expedita molestiae aperiam recusandae corporis consequuntur rerum aspernatur assumenda. Adipisci debitis cum saepe neque nostrum, vel rerum?
                </p>

                <h3>About the Conference</h3>
                
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quis debitis illum dignissimos consectetur optio temporibus voluptates! Exercitationem dolor animi sunt porro reprehenderit aspernatur earum ex, minus cum beatae fugit dolores consectetur totam eaque, maiores expedita! Exercitationem eaque minus temporibus deleniti blanditiis iure veniam labore cum nihil accusantium nisi laboriosam maxime ex, nemo molestias modi fuga obcaecati cupiditate optio magni. Vel modi architecto iure, inventore eos consequatur est suscipit labore unde amet blanditiis voluptatum ab, ex distinctio temporibus! Deleniti temporibus maiores sit nemo obcaecati, itaque sed fugiat, pariatur soluta incidunt distinctio? Veritatis enim inventore deserunt dicta ratione laudantium error tenetur!</p>

                <h3>Conference Themes</h3>
                <br />
                <ul className="themes">
                    <li>Human-Computer Interaction <span><FontAwesomeIcon icon={faLeaf} /></span> </li>
                    <li>AI in Education, Health, Governance, and Social Justice <span><FontAwesomeIcon icon={faLeaf} /></span></li>
                    <li>Explainable and Sustainable AI <span><FontAwesomeIcon icon={faLeaf} /></span></li>
                    <li>Deep Learning for NLP and Image Processing <span><FontAwesomeIcon icon={faLeaf} /></span></li>
                    <li>Generative AI, Creative Applications, and Public Policy <span><FontAwesomeIcon icon={faLeaf} /></span></li>
                </ul>

                <h2>Past Conferences</h2>
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
                </div>


                <h2>Our Sponsers</h2>

                <div className="sponsorGrid">
                    <img src="./5.jpeg" alt="" />
                    <img src="./5.jpeg" alt="" />
                    <img src="./5.jpeg" alt="" />
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
            </div>


        </div>
    )
}
