import './OrgCom.css';

export default function OrgCom() {
  const committeeSections = [
    {
      title: 'Chief Patron',
      members: [
        { name: 'Mr. R. R. Vaderea', img: 'https://media.licdn.com/dms/image/v2/D4E03AQFURSCTKuh2Eg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695356024058?e=1756339200&v=beta&t=HPNIXbpRGKmz-XWMkTWCY_7UI3viuswU5R6og6l2U7g', position: 'Chairperson, Thapar Institute of Engineering & Technology' },
      ],
    },
    {
      title: 'Patron',
      members: [
        { name: 'Prof. Padmakumar Nair', img: 'https://tslas.thapar.edu/assets/uploads/1_66353.png', position: 'Director, Thapar Institute of Engineering & Technology' },
      ],
    },
    {
      title: 'Honorary Chairs',
      members: [
        { name: 'Prof. Ajay Batish', img: 'https://tslas.thapar.edu/assets/uploads/batish_12197.png', position: 'Deputy Director, TIET' },
        { name: 'Prof. Hans van Ees', img: 'https://tslas.thapar.edu/assets/uploads/Hans_van_ees_84792.jpg', position: 'Distinguished Professor, TIET' },
      ],
    },
    {
      title: 'General Chairs',
      members: [
        { name: 'Prof. Vinay Kumar', img: './VinayKumar.jpeg', position: 'Department of Electronics & Communication Engineering' },
        { name: 'Prof. Tim Miller', img: 'https://eecs.uq.edu.au/sites/default/files/styles/uq_core_small_portrait/public/ckfinder/images/staff_profile/41328.png?itok=TwfBGSaN', position: 'Department of Electronics & Communication Engineering' },
      ],
    },
    {
      title: 'Conference Conveners',
      members: [
        { name: 'Dr. Rahul Upadhyay', img: './RahulUpadhyay.jpeg', position: 'Associate Professor, Department of Electronics & Communication Engineering' },
        { name: 'Dr. Mohammed Usman', img: 'https://www.bennett.edu.in/wp-content/uploads/2024/12/Dr.-Mohammed-Usman.jpg', position: 'Department of Electronics & Communication Engineering, Bennett University' },
      ],
    },
    {
      title: 'Steering Committee',
      members: [
        { name: 'Prof. R S Kaler', img: 'https://eced.thapar.edu/files/microfaculty/17/15837678221343.png', position: 'Department of Electronics & Communication Engineering' },
        { name: 'Prof. Arun Kumar', img: './dummy.jpg', position: 'Department of Electronics & Communication Engineering' },
        { name: 'Prof. Shruti Jain', img: './dummy.jpg', position: 'Department of Electronics & Communication Engineering' },
        { name: 'Prof. Alpana Agarwal', img: 'https://eced.thapar.edu/files/faculty/129/1556260806129.jpg', position: 'Department of Electronics & Communication Engineering' },
        { name: 'Prof. Sunil Bhooshan', img: './dummy.jpg', position: 'Department of Electronics & Communication Engineering' },
        { name: 'Dr. Shashikant', img: 'https://eced.thapar.edu/files/microfaculty/17/17295741451270.jpg', position: 'Assistant Professor, Department of Electronics & Communication Engineering' },
      ],
    },
    {
      title: 'Advisory Committee',
      members: [
        { name: 'Prof. Sandeep Sharma', img: 'https://med.thapar.edu/files/microfaculty/16/16270125531156.jpg', position: 'Department of Mechanical Engineering' },
        { name: 'Prof. Dwarka Nath Rath', img: 'https://ced.thapar.edu/files/microfaculty/22/1582547977932.jpg', position: 'Department of Civil Engineering' },
        { name: 'Prof. Rajashri Khanai', img: './dummy.jpg', position: 'Department of Electronics & Communication Engineering' },
        { name: 'Dr. Karun Verma', img: './dummy.jpg', position: 'Associate Professor, Department of Electronics & Communication Engineering' },
        { name: 'Dr. Jyoti Kedia', img: './dummy.jpg', position: 'Associate Professor, Department of Electronics & Communication Engineering' },
        { name: 'Dr. Mudit Gupta', img: './dummy.jpg', position: 'Associate Professor, Department of Electronics & Communication Engineering' },
        { name: 'Dr. Meenaksi Sood', img: './dummy.jpg', position: 'Associate Professor, Department of Electronics & Communication Engineering' },
      ],
    },
  ];

  return (
    <div className='page orgCom'>
      <h2>Organizing Committee</h2>
      {committeeSections.map((section, i) => (
        <div key={i} className="committeeSection">
          <h3>{section.title}</h3>
          <div className="members">
            {section.members.map((member, j) => (
              <div className="member" key={j}>
                <div className="memberImage">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className='memberInfo'>
                  <h2>{member.name}</h2>
                  <p>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
