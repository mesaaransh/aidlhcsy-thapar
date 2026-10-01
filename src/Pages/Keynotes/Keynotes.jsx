import "./keynotes.css"

export default function Keynotes() {
    return (
        <div className="keynotes page">

            <h2>Our Keynote Speakers</h2>

            <div className="members">
                <div className="member keySpeaker">
                    <div className="memberImage">
                        <img src="https://about.uq.edu.au/sites/default/files/profiles/41328.png" alt="" />
                    </div>
                    <div className='memberInfo'>
                        <h2>Prof Tim Miller</h2>
                        <h4>Professor, School of Electrical Engineering and Computer Science, University of Queensland, Australia</h4>
                        <p>
                            Tim Miller is a world-leading researcher in Explainable Artificial Intelligence (XAI), focusing on developing methods to make AI systems transparent and interpretable. His work uniquely integrates insights from cognitive science and human-computer interaction to build human-centered AI. He is highly cited for foundational research that helps people understand, trust, and collaborate with complex AI decision-making systems.
                        </p>

                        <div className="speakerdtv">
                            <div>31st Feburary 2026</div>
                            <div>12 Noon</div>
                            <div>Online</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="members">
                <div className="member keySpeaker">
                    <div className="memberImage">
                        <img src="https://i1.rgstatic.net/ii/profile.image/277711231701009-1443222925372_Q512/Jiri-Hosek-2.jpg" alt="" />
                    </div>
                    <div className='memberInfo'>
                        <h2>Prof Jiří Hošek</h2>
                        <h4>Associate Professor, Department of Telecommunications, Brno University of Technology, Czech Republic</h4>
                        <p>Jiří Hošek is a prolific researcher in wireless communications, having co-authored over 130 papers on 4G/5G cellular systems, the Internet of Things (IoT), and network performance. His work centrally focuses on optimizing Quality of Service (QoS) and Quality of Experience (QoE) for network users. His recent research also leverages AI and machine learning for optimizing emerging technologies, including UAV (drone) communication, mmWave networks, and satellite systems.</p>

                        <div className="speakerdtv">
                            <div>31st Feburary 2026</div>
                            <div>12 Noon</div>
                            <div>Online</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="members">
                <div className="member keySpeaker">
                    <div className="memberImage">
                        <img src="https://declercq.gatech.edu/images/2016-nico-declercq.jpg" alt="" />
                    </div>
                    <div className='memberInfo'>
                        <h2>Prof Nico F. Declercq</h2>
                        <h4>Professor, Georgia Institute of Technology, Atlanta, USA</h4>
                        <p>Prof. Nico F. Declercq is a distinguished physicist and mechanical engineer renowned for his contributions to ultrasonics, diffraction theory, acousto-optics, and medical physics. His research combines theoretical and experimental approaches to linear and nonlinear ultrasonics, with applications in conventional materials, composites, solar energy systems, and metamaterials. In recent years, he has been developing Trembling Spacetime Relativity Theory (TSRT), a novel geometric framework that seeks to advance our understanding of the fundamental laws governing nature. His work has significantly contributed to both fundamental science and engineering applications across multiple disciplines.</p>

                        <div className="speakerdtv">
                            <div>31st Feburary 2026</div>
                            <div>12 Noon</div>
                            <div>Online</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
