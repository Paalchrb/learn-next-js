/* import fetch from 'node-fetch';
import Link from 'next/link';

const Home = ({ posts }) => {
  return (
    <div className='container'>
      <h1>Welcome to my front page</h1>
      <ul>
        {
          // If users exist present as a list of links
          posts.length && posts.map(post => (
            <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
          ))
        }
      </ul>
    </div>
  );
};

export const getStaticProps = async context => {
  // Call an external API endpoint to get users
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // By returning { props: users }, the Home component
  // will receive `users` as a prop at build time
  return {
    props: {
      posts,
    }
  }
}



export default Home; */

import Layout from './components/MyLayout';

const Index = props => (
  <Layout>
    <h1> frontpage</h1>
    <p>Dedicated to real batmans fans...</p>
    <p>Banner incomming....!</p>
  </Layout>
);



export default Index;



/* import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from 'node-fetch';

const fetcher = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const Index = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
    fetcher
  );
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <main className="center">
      <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}
      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}</style>
    </main>
  );
};

export default Index; */

/* import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1>Hello world! - user agent: {userAgent}</h1>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home; */