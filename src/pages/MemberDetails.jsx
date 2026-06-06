import { useParams } from "react-router-dom";
import { members } from "../data/members";
import {
  FaMusic,
  FaCloud,
  FaCoffee,
  FaHome
} from "react-icons/fa";

const memberIcons={
music: FaMusic,
cloud: FaCloud,
coffee:FaCoffee,
home:FaHome
};

import {
  GiPianoKeys,
  GiDrumKit,
  GiGuitar,
} from "react-icons/gi";

const instrumentIcons = {
  piano: GiPianoKeys,
  drum:GiDrumKit,
  guitar:GiGuitar
};

function MemberDetails() {
    const { id } = useParams();
    const member = members.find((m) => m.id === id);

    const textStyle = { color: member.secondaryColor, opacity: 0.9 };
    const InstrumentIcon =instrumentIcons[ member.instrumentIcon];
    const PinIcon = memberIcons[member.pin];

    if (!member) return <h1>Member not found</h1>;

    return (
        <div className="member-details">

            <div className="member-info">
                <h1 style={textStyle}><PinIcon /> {" "} {member.name}</h1>
                <p style={textStyle}>{member.tagline}</p>
                <br />
                <p style={textStyle}> "{member.bio}"</p>
                <br />
                <p style={textStyle}> <strong>Age:</strong>  {member.age}</p>
                <p style={textStyle}> <strong>Birthday:</strong>  {member.birthday}</p>
                <p style={textStyle}><strong>Instrument:</strong> <InstrumentIcon /> {" "} {member.instrument}</p>
                <p style={textStyle}><strong>Hobby:</strong> {member.hobby}</p>
                <br />
                <p style={textStyle}><strong>Favorite Color:</strong> {member.favoriteColor}</p>
                <p style={textStyle}> <strong>Favorite Food:</strong>  {member.favoriteFood}</p>
                <p style={textStyle}> <strong>Favorite Drink:</strong>  {member.favoriteDrink}</p>
                <br />
                <div style={textStyle} className="member-quote"> "{member.quote}"</div>
            </div>

            <div className="member-img">
                <img src={member.detalisImg} alt={member.name} />
            </div>
        </div>
    ); 
}

export default MemberDetails;