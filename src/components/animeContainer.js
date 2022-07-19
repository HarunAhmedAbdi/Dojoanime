import React from "react";
import { Link } from 'react-router-dom';


 const setScoreClass = (vote) => {
    if(vote => 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else if (vote >= 3) {
        return "red"
    } else {
        return "white";
    }
 };


 function setDefaultScore(d) {
    if (d == null) {
        return (d = "N/A");
    } else {
        return d;
    }
}


function formatUrl(url) {
    const newUrl = url.replaceAll(" ", "_");
    return newUrl;
}

function AnimeContaimer({
    airing_start,
     genres,
     images,
     mal_id,
     score,
     title,
     synopsis,
     episodes,
     url,
}) {
    return (
        <div className="anime">
            <Link to={`anime/${mal_id}/${formatUrl(title)}`}>
                <img src={images.jpg.image_url} alt={title} />
                <div className="anime-info">
                    <h3>{title}</h3>
                    <span className={`tag ${setScoreClass(score)}`}>
                        {setDefaultScore(score)}
                    </span>
                </div>
                <div className="anime-over">
                    <h2>Synopsis</h2>
                    <p>{synopsis}</p>
                </div>
            </Link>
        </div>
    );
}

export default AnimeContaimer;