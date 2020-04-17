import Link from 'next/link';

const MovieLink = ({ movie }) => (
  <li>
    <Link href="/movie/[id]" as={`/movie/${movie?.id}`}>
      <a>{movie?.name}</a>
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

export default MovieLink;