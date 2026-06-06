import { Link } from "react-router-dom";

function MemberCard({ member }) {
    const PinIcon = member.pin;
    const InstrumentIcon = member.instrumentIcon;

    return (
        <Link to={`/member/${member.id}`} className="member-card-link">
            <div className="member-card" style={{boxShadow: `0 0 15px ${member.color}`}}>
                <img src={member.image} alt={member.name}/>
                <h2>
                    <PinIcon size={20} color={member.color} />
                    {" "}
                    {member.name}
                    </h2>
                <p>
                    <InstrumentIcon size={20} color={member.color}/>
                    {" "}
                    {member.instrument}
                </p>
            </div>
        </Link>
    );
}

export default MemberCard;