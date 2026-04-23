import './OrgCom.css';
import committeeData from "../../info/Committees";
import Section from '../../Components/Common/Section';
import MemberCard from '../../Components/Common/MemberCard';
import PageHero from '../../Components/Common/PageHero';
import SponsorsBar from '../../Components/Common/SponsorsBar';

export default function SOCom() {
  return (
    <div className='supCom-page'>
      <PageHero
        title="Section Oversight Committee"
        subtitle="IEEE Section Oversight"
        backgroundImage="/header/3.jpg"
      />
      <div className='page orgCom'>
        {committeeData.sectionOversight.map((section, i) => (
          <Section key={i} title={section.title} variant="committee-grid">
            {section.members.map((member, j) => (
              <MemberCard
                key={j}
                variant="simple"
                name={member.name}
                position={member.position}
                email={member.email}
              />
            ))}
          </Section>
        ))}
      </div>
      <SponsorsBar />
    </div>
  );
}
