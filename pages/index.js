import fetch from 'node-fetch';
import Link from 'next/link';

const Home = ({ users }) => {
  return (
    <div className="container">
      <h1>Welcome to my front page</h1>
      <ul>
        {
          // If users exist present as a list of links
          users.length && users.map(user => (
            <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
          ))
        }
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  // Call an external API endpoint to get users
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();


  // By returning { props: users }, the Home component
  // will receive `users` as a prop at build time
  return {
    props: {
      users,
    }
  }
}

export default Home;