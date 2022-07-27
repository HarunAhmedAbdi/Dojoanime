import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../Styles/mainAnimeCard.scss';

function setDefault(d) {
  if (d == null) {
      return (d = "--");
  } else {
      return d;
  }
}

function formatUrl(url) {
  const newUrl = url.replaceAll(" ", "_");
  return newUrl;
}

function MainAnimeCard({
  airing_start,
   genres,
   images,
   mal_id,
   score,
   title,
   synopsis,
   episodes,
   url,
   season,
   rank,
}) {
  return (
      <div className="clash-card barbarian">
        <div className="clash-card__image clash-card__image--barbarian">
          <img src={images.webp.image_url} alt="barbarian" />
        </div>
        <div className="clash-card__level clash-card__level--barbarian">{season}</div>
        <div className="clash-card__unit-name">{title}</div>
        <div className="clash-card__unit-description">{synopsis}</div>
  
        <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
          <div className="one-third">
            <div className="stat">{setDefault(episodes)}</div>
            <div className="stat-value">Episodes</div>
          </div>
  
          <div className="one-third">
            <div className="stat">{setDefault(score)}</div>
            <div className="stat-value">Score</div>
          </div>
  
          <div className="one-third no-border">
            <div className="stat">{setDefault(rank)}</div>
            <div className="stat-value">Rank</div>
          </div>
        </div>
      </div>
  );
}

export default MainAnimeCard;