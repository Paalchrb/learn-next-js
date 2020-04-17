import Link from 'next/link';

const BoardgameLink = ({ boardgame }) => (
  <li>
    <Link href="/boardgame/[id]" as={`/boardgame/${boardgame?.id}`}>
      <a>{boardgame?.name}</a>
    </Link>
    <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
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
  </li>
);

export default BoardgameLink;