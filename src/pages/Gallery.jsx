import React from "react";
import { useState } from "react";
import { galleryImages } from "../data/gallery";

function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <section className="page gallery-page">
            <div className="container">
                <h1 className="section-title">Gallery</h1>

                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <div key={img.id} className="gallery-card">
                            <div key={img.id}
                                className="gallery-grid"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <img src={img.image} alt={img.title} />
                            </div>

                        </div>
                    ))}
                </div>

                {selectedIndex !== null && (
                    <div className="lightbox">
                        <button
                            className="close-btn"
                            onClick={() => setSelectedIndex(null)}
                        >
                            ✕
                        </button>

                        <button
                            className="prev-btn"
                            onClick={() => setSelectedIndex(
                                selectedIndex === 0
                                    ? galleryImages.length - 1
                                    : selectedIndex - 1
                            )
                            }
                        >
                            ←
                        </button>

                        <img
                            src={galleryImages[selectedIndex].image}
                            alt=""
                            className="lightbox-image"
                        />

                        <button
                            className="next-btn"
                            onClick={() => setSelectedIndex(
                                selectedIndex === galleryImages.length - 1
                                    ? 0
                                    : selectedIndex + 1
                            )
                            }
                        >
                            →
                        </button>

                    </div>
                )}
            </div>
        </section>
    );
}

export default Gallery;