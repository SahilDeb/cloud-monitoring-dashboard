import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';
import './header.css';

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/* Logo */}
      <Logo />
      {/* search bar */}
      <SearchBar />
      {/* nav */}
      <Nav />
    </header>
  );
};

export default Header;
