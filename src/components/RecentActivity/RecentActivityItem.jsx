import PropTypes from 'prop-types';

const RecentActivityItem = ({ item }) => {
  return (
    <div className="activity-item d-flex">
      <div className="activity-label">{item.time}</div>
      <i
        className={`bi bi-circle-fill activity-badge align-self-start ${item.color}`}
      ></i>
      {item.highlight === '' ? (
        <div className="activity-content">{item.content}</div>
      ) : (
        <div className="activity-content">
          {item.content.substring(0, item.content.indexOf(item.highlight))}
          <a href="#" className="fw-bold text-dark">
            {item.highlight}
          </a>
          {item.content.slice(
            item.content.indexOf(item.highlight) + item.highlight.length,
            -1
          )}
        </div>
      )}
    </div>
  );
};

RecentActivityItem.propTypes = {
  item: PropTypes.object,
};

export default RecentActivityItem;
