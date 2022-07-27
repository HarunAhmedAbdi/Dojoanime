import { useState, useEffect } from "react";
import AnimeContainer from "../components/animeContainer";
import MainAnimeCard from "../components/mainAnimeCard";

const seasonalAnimeUrl = 'https://api.jikan.moe/v4/seasons/'
const dateObj = new Date();
const year = dateObj.getFullYear();

function Seasonal(props) {
    const [seasonalAnime, setSeasonalAnime] = useState([]);
    useEffect(() => {
        fetch(`${seasonalAnimeUrl}${year}/fall`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok");
            })
            .then((jsonResponse) => {
                console.log(jsonResponse);
                setSeasonalAnime(jsonResponse.data);
            })
            .catch((error) => {
                console.log("The fetch operation was unsuccesful", error);
            });
    }, []);
    const filteredAnimeContent = (array) => {
        if (seasonalAnime.length) {
            seasonalAnime
                .map((anime) => <MainAnimeCard key={anime.mal_id} {...anime} />)
        }
    };
    return (
        <div className="slide-container">
            <div className="wrapper">
                {seasonalAnime.length > 0 &&
                    seasonalAnime
                        .map((anime) => <MainAnimeCard key={anime.mal_id} {...anime} />)}
            </div>

        </div>
    )
};

export default Seasonal;
