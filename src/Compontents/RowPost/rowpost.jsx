import './rowpost.css'
import { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl,API_KEY } from "../../constants/constants";
import YouTube from 'react-youtube'
function rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response =>{
     console.log(response.data.results) 
     setMovies(response.data.results)
    }).catch(error => {
      console.error('Error fetching data:', error);
    })

  }, [])
    const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovieClick = (id) => {
    // Handle the movie click event here
    console.log('Movie clicked:', id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log('No video available for this movie.');
      }
    });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img onClick={() => handleMovieClick(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} key={obj.id} src={`https://image.tmdb.org/t/p/original${obj.backdrop_path}`} alt={obj.name} />
        ))}
      </div>
      <div className="posters">
        
        
      </div>
      { urlId && <YouTube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default rowpost
