
import Layout from './components/MyLayout';
import fetch from 'isomorphic-unfetch';
import BoardgameLink from './components/BoardgameLink';

const Boardgames = ({ boardgames }) => {
  if(!boardgames) {
    return <h3>Loading...</h3>
  }
  return (
    <Layout>
      <h1>Batman Boardgames</h1>
      <ul>
        {boardgames.map(boardgame => (
          <BoardgameLink key={boardgame.id} boardgame={{id: boardgame.id, name: boardgame.name}} />
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
  );
};

Boardgames.getInitialProps = async function() {
  const res = await fetch('https://www.boardgameatlas.com/api/search?client_id=SB1VGnDv7M&name=batman&fuzzy_match=true');
  const data = await res.json();

  return {
    boardgames: data.games
  };
};

export default Boardgames;