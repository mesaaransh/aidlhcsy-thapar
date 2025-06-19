import './OrgCom.css'

export default function OrgCom() {
  return (
    <div className='page orgCom'>
        <h2>Organizing Committee</h2>

        <div className="members">
            <div className="member directorNote">
                <img src="./ThaparVector.png" className='tiet' alt="" />
                <div className="memberImage">
                    <img src="./VinayKumar.jpeg" alt="" />
                </div>
                <div className='memberInfo'>
                    <h2>Dr. Padmakumar Nair</h2>
                    <h4>Director, Thapar Institute of Engineering & Technology</h4>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, id numquam consequatur adipisci cum dolorum rem tenetur provident nisi sit consectetur, eius laborum voluptatum ipsa tempora ex! Quae, quia asperiores!</p>
                </div>
            </div>
        </div>


        <h3>Conference Chairs</h3>
        <div className="members">

            <div className="member">
                <div className="memberImage">
                    <img src="./VinayKumar.jpeg" alt="" />
                </div>
                <div className='memberInfo'>
                    <h2>Dr. Vinay Kumar</h2>
                    <p>Dean, Thapar School of Liberal Arts & Sciences</p>
                    <p>Professor, Department of Electronics Engineering</p>
                    <p>Thapar Institute of Engineering & Technology</p>
                </div>
            </div>

            <div className="member">
                <div className="memberImage">
                    <img src="./RahulUpadhyay.jpeg" alt="" />
                </div>
                <div className='memberInfo'>
                    <h2>Dr. Rahul Upadhyay</h2>
                    <p>Associate Professor</p>
                    <p>Department of Electronics Engineering</p>
                    <p>Thapar Institute of Engineering & Technology</p>
                </div>
            </div>

            <div className="member">
                <div className="memberImage">

                </div>
                <div className='memberInfo'>
                    <h2>Dr. Shashikant</h2>
                    <p>Assistant Professor</p>
                    <p>Department of Electronics Engineering</p>
                    <p>Thapar Institute of Engineering & Technology</p>
                </div>
            </div>

            <div className="member">
                <div className="memberImage">
                    <img src="./AnupamGarg.jpeg" alt="" />
                </div>
                <div className='memberInfo'>
                    <h2>Dr. Anupam Garg</h2>
                    <p>Assistant Professor</p>
                    <p>Department of Computer Science & Engineering</p>
                    <p>Thapar Institute of Engineering & Technology</p>
                </div>
            </div>

        </div>
    </div>
  )
}
