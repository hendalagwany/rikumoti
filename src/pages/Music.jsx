import React from "react";
import SongCard from "../components/ui/SongCard";

import {
    groupSongs,
    memberSongs
} from "../data/music";

function Music() {
    return (
        <section className="page music-page">
            <div className="container">

                <div className="music-section">
                    <h2 className="section-title">Rikumoti Songs</h2>
                    <div className="group-songs-grid">
                        {groupSongs.map((song) => (
                            <SongCard
                                key={song.id}
                                song={song}
                            />
                        ))}
                    </div>
                    <br />
                    <br />
                    <div className="music-section">
                        <h2 className="myuki-title">
                            Myuki
                        </h2>
                        <div className="songs-grid">
                            {memberSongs.myuki.map((song) => (
                                <SongCard
                                    key={song.id}
                                    song={song}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="music-section">
                        <h2 className="ranmoki-title">
                            Ranmoki
                        </h2>
                        <div className="songs-grid">
                            {memberSongs.ranmoki.map((song) => (
                                <SongCard
                                    key={song.id}
                                    song={song}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="music-section">
                        <h2 className="riku-title">
                            Riku
                        </h2>
                        <div className="songs-grid">
                            {memberSongs.riku.map((song) => (
                                <SongCard
                                    key={song.id}
                                    song={song}
                                />

                            ))}
                        </div>
                    </div>

                    <div className="music-section">
                        <h2 className="toti-title">
                            Toti
                        </h2>
                        <div className="songs-grid">
                            {memberSongs.toti.map((song) => (
                                <SongCard
                                    key={song.id}
                                    song={song}
                                />

                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Music;