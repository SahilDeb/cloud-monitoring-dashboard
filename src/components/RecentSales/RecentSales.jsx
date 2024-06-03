/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import CardFilter from '../Card/CardFilter';
import RecentSalesTable from './RecentSalesTable';
import './recentSales.css';

const RecentSales = () => {
  const [filter, setFilter] = useState('Today');
  const [items, setItems] = useState([]);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/recentsales`
    );
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>| {filter}</span>
        </h5>

        <RecentSalesTable items={items} />
      </div>
    </div>
  );
};

export default RecentSales;
