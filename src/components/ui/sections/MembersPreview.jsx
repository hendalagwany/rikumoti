import { members } from "../../../data/members";
import MemberCard from "../MemberCard";

function MembersPreview() {
  return (
    <section className="member-details-section">
      <h2>Meet The Members</h2>
      <br />
      <div className="members-grid">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
          />
        ))}

      </div>

    </section>
  );
}

export default MembersPreview;