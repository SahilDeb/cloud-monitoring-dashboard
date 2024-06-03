import './pageTitle.css';
import PropTypes from 'prop-types';

const PageTitle = ({ page }) => {
  return (
    <div className="pageTitle">
      <h1>{page}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">{page}</li>
        </ol>
      </nav>
    </div>
  );
};

PageTitle.propTypes = {
  page: PropTypes.string,
};

export default PageTitle;
