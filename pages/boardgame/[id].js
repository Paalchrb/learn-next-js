import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Boardgames = ({ boardgame }) => {
  return (
    <Layout>
      <h1>{boardgame.name}</h1>
      {boardgame.images ? <img src={boardgame.images.medium} /> : null}
      <p>{boardgame.primary_publisher}</p>
    </Layout>
  )
};

Boardgames.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://www.boardgameatlas.com/api/search?client_id=SB1VGnDv7M&ids=${id}`);
  const boardgame = await res.json();

  return { boardgame: boardgame.games[0] };
};

export default Boardgames;