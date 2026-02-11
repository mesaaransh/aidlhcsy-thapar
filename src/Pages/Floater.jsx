import React from 'react'
import dates from "../info/Committee"

export default function Floater() {
    return (
        <div className="floater" id='dates'>
            <div className="impDates">
                <h3>IMPORTANT DATES</h3>

                <ul>
                    <li>Paper Submission Deadline <br /> <span>{dates.PaperSubmition}</span></li>
                    <li>Peer Review Period Start <br /> <span>{dates.PeerReviewStart}</span></li>
                    <li>Peer Review Period End <br /> <span>{dates.PeerReviewEnd}</span></li>
                    <li>Notification of Acceptance <br /> <span>{dates.NotificationAcceptance}</span></li>
                    <li>Camera Ready Submission <br /> <span>{dates.CameraReady}</span></li>
                    <li>Registration Deadline <br /> <span>{dates.RegistrationDeadline}</span></li>
                    <li>Conference Dates <br /> <span>{dates.ConferenceDates}</span></li>
                </ul>
            </div>

            {/* <div className="impDates">
                <h3>LATEST NEWS</h3>

                <ul>
                    <li><span>30 August 2025</span> <br /> Themes of the conference revealed </li>
                </ul>
            </div> */}
        </div>
    )
}
