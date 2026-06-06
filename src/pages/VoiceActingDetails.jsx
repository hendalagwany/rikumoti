import { useParams } from "react-router-dom";
import { voiceActingProjects } from "../data/voiceActing";

function VoiceActingDetails(){
    const {id}= useParams();
    const voiceActingChar =voiceActingProjects.find((char) => char.id === id);

    if (!voiceActingChar)  return <h1>Character not found</h1>;

    return(
        <div className="character-details">
            <div className="character-info">
                <h1>{voiceActingChar.character} </h1>
                <p><strong>VA:</strong> {voiceActingChar.member} </p>
                <br />
                <p><strong>Anime:</strong>{voiceActingChar.anime} </p>
                <br />
                <p><strong>Description:</strong>{voiceActingChar.description} </p>
                <br />
                <p><strong>Year:</strong>{voiceActingChar.year} </p>
                <br />
                <p><strong>Season:</strong>{voiceActingChar.season} </p>
                <br />
                <p><strong>Genre:</strong>{voiceActingChar.genre} </p>
                <br />
                <p><strong>Role Type:</strong>{voiceActingChar.roleType} </p>
                <br />
                <p><strong>Studio:</strong>{voiceActingChar.studio} </p>
                <br />
                <p><strong>Charater Age:</strong>{voiceActingChar.characterAge} </p>
                <br />
                <p><strong>Character Color:</strong>{voiceActingChar.characterColor} </p>
                <br />
                <p><strong>Status:</strong>{voiceActingChar.status} </p>
                <br />
            </div>

              <div className="voiceacting-img">
                <img src={voiceActingChar.image} alt={voiceActingChar.name} />
            </div>
        </div>
    );
}

export default VoiceActingDetails;