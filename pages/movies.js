import Layout from './components/MyLayout';
import fetch from 'isomorphic-unfetch';
import MovieLink from './components/MovieLink';

const Movies = props => {
  return (
    <Layout>
      <h1>Batman Movies</h1>
      <ul>
        {props.movies.map(movie => (
          <MovieLink key={movie.imdbID} movie={{id: movie.imdbID, name: movie.Title}} />
        ))}
      </ul>
      <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}
      </style>
  </Layout>
)};

Movies.getInitialProps = async function() {
  const res = await fetch('http://www.omdbapi.com/?s=batman&apikey=454bfe9&type=movie');
  const data = await res.json();

  return {
    movies: data.Search
  };
};

export default Movies;