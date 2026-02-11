import './OrgCom.css';

import committeeSections from "./Committee"

export default function OrgCom() {

  return (
    <div className='page orgCom'>

      {committeeSections.map((section, i) => (

        <div key={i} className="">
          <h3>{section.title}</h3>

          <div className="members">
            {section.members.map((member, j) => (
              <div className="member" key={j}>
                {/* <div className="memberImage">
                  <img src={member.img} alt={member.name} />
                </div> */}
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
