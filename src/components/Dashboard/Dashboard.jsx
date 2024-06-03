/* eslint-disable no-undef */
import { useState } from 'react';
import './dashboard.css';
import { useEffect } from 'react';
import Card from '../Card/Card';
import Reports from '../Reports/Reports';
import RecentSales from '../RecentSales/RecentSales';
import BudgetReport from '../BudgetReport/BudgetReport';
import WebTraffic from '../WebTraffic/WebTraffic';

const Dashboard = () => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cards`);
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {cards.length > 0 &&
              cards.map((card) => <Card key={card._id} card={card} />)}
            <div className="col-12">
              <Reports />
            </div>
            <div className="col-12">
              <RecentSales />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <BudgetReport />
          <WebTraffic />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
