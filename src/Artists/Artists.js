import React from "react";

const Artists = ({name, genre, urlImg}) => {

    return (
        <div id="result-artist">
            <div className="grid-container">
                <div className="artist-card" id="">
                    <div className="card-img">
                        <img id="artist-img" src={urlImg} className="artist-img" />
                        <div className="play">
                            <span className="fa fa-solid fa-play" />
                        </div>
                    </div>
                    <div className="card-text">
                        <a title="Foo Fighters" className="vst" href="">
                            <span className="artist-name" id="artist-name">
                                {name}
                            </span>
                            <span className="artist-categorie">{genre}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artists;