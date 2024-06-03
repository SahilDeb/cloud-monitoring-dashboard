import PropTypes from 'prop-types';

const CardFilter = ({ filterChange }) => {
  return (
    <div className="filter">
      <a href="#" className="icon" data-bs-toggle="dropdown">
        <i className="bi bi-three-dots"></i>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>

        <li>
          <a onClick={() => filterChange('Today')} className="dropdown-item">
            Today
          </a>
        </li>

        <li>
          <a
            onClick={() => filterChange('This Month')}
            className="dropdown-item"
          >
            This Month
          </a>
        </li>

        <li>
          <a
            onClick={() => filterChange('This Year')}
            className="dropdown-item"
          >
            This Year
          </a>
        </li>
      </ul>
    </div>
  );
};

CardFilter.propTypes = {
  filterChange: PropTypes.func,
};

export default CardFilter;
