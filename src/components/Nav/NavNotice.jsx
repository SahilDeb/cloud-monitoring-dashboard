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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>30min. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-danger"></i>
          <div>
            <h4>Cras eu ex tempus</h4>
            <p>Duis eu justo eget ipsum sollicitudin cursus a at orci.</p>
            <p>1hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-success"></i>
          <div>
            <h4>In ultrices quam ac facilisis</h4>
            <p>Maecenas condimentum sapien id eros feugiat consequat.</p>
            <p>2hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer d-flex justify-content-center">
          <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
};

export default NavNotice;
