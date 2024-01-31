import React, { useEffect, useState } from 'react';
// import { link } from 'react-royter-dom';
import { MovieService } from '../../api/MovieService.js';
import MovieCard from '../../components/MovieCard/MovieCard.jsx';

// Recebendo o valor do componente App com o paramentro searchValue
const Home = ({ searchValueProp }) => {
  // Aqui será guardada minha lista de objetos
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    /* 
      Quando eu coloco o *Objeto data* entre {} estou desestruturando este objeto e pegando
      diretamente o Objeto e quando eu coloco {data: e abro{}} novamente estou quebrando
      esta estruturação novamente e estou indi diretamente ao ponto do objeto que eu quero
      lembrando que esta quebra só vai ate o segundo nivél não desce mais que isso.
    */
    const {
      data: { results },
    } = await MovieService.getMovies();
    // console.log(results);
    //Inserindo os dados dentro variável movies que foi criada no const[movies, setMovies]
    setMovies(results);
  }

  async function getMoviesSearch(movieString){
    const{
      data: {results},
    } = await MovieService.searchMovies(movieString);
    setMovies(results);
  };

  useEffect(() => {
    getMovies();
    /*
      Importante nãop esquecer de colocar o [] pra não dar um loop infinito e travar a aplicação
    */
  }, []);

  useEffect(() => {
    if(searchValueProp){
      getMoviesSearch(searchValueProp);
    }
    // Se o campode pesquisa for vazio retorna para os mais populares
    if(searchValueProp === ""){
      getMovies();
    }

  }, [searchValueProp]);

  return (
    <section className='Home'>
      {
        /*
          Lembrando que o map faz a função de loop e também que apos o map nãopode esquecer dos 
          (parenteses) porque estamos estevendo codigo html e cada instrução que envolva logica
          javaScript dentro do html tem que ser entre {chaves} lembrando que dentro da primeira
          <div> não pedesso esquecer de colocar o KEY
          *******IMPORTANTE**********
          Quando colo {CHAVES} dentro do map estou desestruturando e pegando direto as 
          propriedades que eu quero utilizar.
          sem desestruturar deve ficar assim: movies.map((movie) =>( . . . .
            e utilizar o movie antes de cada propriedade.
        */
        // movies.map(({id, title, vote_average}) =>(
        movies.map((movie) => (
          <div key={movie.id}>
            {/* o movieProp esta criando uma propriedade para o componente */}
            <MovieCard movieProp={movie} />
          </div>
        ))
      }
    </section>
  )
}

export default Home;
