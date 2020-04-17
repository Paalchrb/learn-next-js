import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Movie = props => (
  <Layout>
    <h1>{props.movie.Title}</h1>
    <p>{props.movie.Plot.replace(/<[/]?[pb]>/g, '')}</p>
    {props.movie.Poster ? <img src={props.movie.Poster} /> : null}
  </Layout>
);

Movie.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=454bfe9&type=movie`);
  const movie = await res.json();

  return { movie };
};

export default Movie;