const NavNotice = () => {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Dolares</p>
            <p>30min. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-danger"></i>
          <div>
            <h4>Atque rerrum neskhfks ksdsh</h4>
            <p>QWkshsh skdsdhsd skdhs dkhs</p>
            <p>1hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-success"></i>
          <div>
            <h4>Sit kdhs khshd</h4>
            <p>Qiewhsdh deole dksh kshd</p>
            <p>2hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
};

export default NavNotice;