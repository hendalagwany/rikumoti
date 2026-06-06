import { useParams } from "react-router-dom";
import { animeProjects } from "../data/anime";

function AnimeDetails(){
    const {id}= useParams();
    const selectedAnime =animeProjects.find((anime) => anime.id === id);

    if (!selectedAnime)  return <h1>Anime not found</h1>;

    return(
        <div className="anime-details"> 
            <div className="anime-info">
                <h1>{selectedAnime.title} </h1>
                <p><strong>Role:</strong> {selectedAnime.role} </p>
                <br />
                <p><strong>Year:</strong>{selectedAnime.year} </p>
                <br />
                <p><strong>Description:</strong>{selectedAnime.description} </p>
                <br />
                <p><strong>Episodes:</strong>{selectedAnime.episodes} </p>
                <br />
                <p><strong>Genre:</strong>{selectedAnime.genre} </p>
                <br />
                <p><strong>Studio:</strong>{selectedAnime.studio} </p>
                <br />
                <p><strong>Contribution Type:</strong>{selectedAnime.contributionType} </p>
                <br />
                <p><strong>Members Involved:</strong>{selectedAnime.membersInvolved} </p>
                <br />
                <p><strong>Main Member:</strong>{selectedAnime.mainMember} </p>
                <br />
                <p><strong>Popularity Rank:</strong>{selectedAnime.popularityRank} </p>
                <br />
                <p><strong>Story:</strong>{selectedAnime.story} </p>
                <br />
            </div>

              <div className="anime-img">
                <img src={selectedAnime.image} alt={selectedAnime.name} />
            </div>
        </div>
    );
}

export default AnimeDetails;