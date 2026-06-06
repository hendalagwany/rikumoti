import React from "react";
import { animeProjects } from "../data/anime";
import AnimeCard from "../components/ui/AnimeCard";

function Anime() {
    return (
        <section className="page anime-page">
            <div className="container">
                <h1 className="section-title">Anime</h1>

            <div className="anime-page-grid">
                {animeProjects.map((anime) => (
                    <AnimeCard
                        key={anime.id}
                        anime={anime}
                    />
                ))}
            </div>
            </div>
        </section>
    );
}

export default Anime;