import { Link } from "react-router-dom";
import { members } from "../data/members";
import MemberCard from "../components/ui/MemberCard";

function Members(){
    return(
    <section className="page members-page">
      <div className="container">
          <h1 className="section-title">Members</h1>

       <div className="members-page-grid">
         {members.map((member) => (
            <MemberCard 
            key={member.id}
            member={member}
            />
        ))}
       </div>
      </div>
    </section>
    );
}
 
export default Members;