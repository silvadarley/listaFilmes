import {Link} from "react-router-dom";
// import MovieCard from '../../components/MovieCard/MovieCard.jsx';

/* 
  Com o paramentro movieProp estou recebendo os dados da HOME lembranqo que passei dentro de 
  {Chaves} e desestruturando, para que la na frente eu utilise apenas a propriedade que eu 
  quero e preciso de usa. se não fizer assim preciso de colocar ******MOVIEPROPS****** antes
  de cada prorpeidade, para conseguir acessar.
*/
const MovieCard = ({movieProp}) => {
  return (
    <div className="MovieCard">
      <div className="movie-image">

        <img 
          src={`https://image.tmdb.org/t/p/w1280${movieProp.poster_path}`} 
          alt={movieProp.title} 
        />
        
        <div className="movie-description">
          <h3>{movieProp.title}</h3>
          <Link to={`/movie/${movieProp.id}`} className="btn-details">
            Ver Detalhes
          </Link>
        </div>

      </div>
      
    </div>
  )
}

export default MovieCard
