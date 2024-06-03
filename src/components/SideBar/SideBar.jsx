import navItems from '../../data/navItems';
import './sideBar.css';

const SideBar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Documents</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>

          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Customers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Suppliers</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-heading">Pages</li>
        {navItems.map((item) => (
          <li className="nav-item" key={item._id}>
            <a href="#" className="nav-link collapsed">
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
