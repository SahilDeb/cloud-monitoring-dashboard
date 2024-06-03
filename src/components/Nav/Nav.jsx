import NavAvatar from './NavAvatar';
import NavNotice from './NavNotice';
import './nav.css';

const Nav = () => {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNotice />
        <NavAvatar />
      </ul>
    </nav>
  );
};

export default Nav;
