import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/shows">
      <a style={linkStyle}>Shows</a>
    </Link>
    <Link href="/movies">
      <a style={linkStyle}>Movies</a>
    </Link>
    <Link href="/boardgames">
      <a style={linkStyle}>Boardgames</a>
    </Link>
  </div>
);

export default Header;