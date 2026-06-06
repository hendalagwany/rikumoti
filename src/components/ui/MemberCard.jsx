import { Link } from "react-router-dom";
import {
    FaMusic,
    FaCloud,
    FaCoffee,
    FaHome
} from "react-icons/fa";

const memberIcons = {
    music: FaMusic,
    cloud: FaCloud,
    coffee: FaCoffee,
    home: FaHome
};

import {
    GiPianoKeys,
    GiDrumKit,
    GiGuitar,
} from "react-icons/gi";

const instrumentIcons = {
    piano: GiPianoKeys,
    drum: GiDrumKit,
    guitar: GiGuitar
};

function MemberCard({ member }) {
    const PinIcon = memberIcons[member.pin];
    const InstrumentIcon = instrumentIcons[member.instrumentIcon];

    return (
        <Link to={`/member/${member.id}`} className="member-card-link">
            <div className="member-card" style={{ boxShadow: `0 0 15px ${member.color}` }}>
                <img src={member.image} alt={member.name} />
                <h2>
                    <PinIcon size={20} color={member.color} />
                    {" "}
                    {member.name}
                </h2>
                <p>
                    <InstrumentIcon size={20} color={member.color} />
                    {" "}
                    {member.instrument}
                </p>
            </div>
        </Link>
    );
}

export default MemberCard;