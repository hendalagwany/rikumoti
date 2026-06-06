import { Link } from "react-router-dom";

function AnimeCard({ anime }) {
    return (
        <Link
            to={`/anime/${anime.id}`}
            className="anime-card-link"
        >
            <div className="anime-card">
                <img src={anime.image} alt={anime.title} />
                
                <div className="anime-content">
                    <h3>{anime.title}</h3>
                </div>
            </div>
        </Link>
    );
}

export default AnimeCard;