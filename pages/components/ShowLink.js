import Link from 'next/link';

const ShowLink = ({ show }) => (
  <li>
    <Link href="/show/[id]" as={`/show/${show?.id}`}>
      <a>{show?.name}</a>
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

export default ShowLink;