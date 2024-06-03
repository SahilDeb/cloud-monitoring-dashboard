import { useState } from 'react';
import Chart from 'react-apexcharts';

const options = {
  series: [
    {
      name: 'Total Requests',
      data: [31, 40, 28, 51, 42, 82, 56],
    },
    {
      name: 'Requests Failed',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: 'Requests Success',
      data: [15, 11, 32, 18, 9, 24, 11],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 4,
    },
    colors: ['#4154f1', '#2eca6a', '#ff771d'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:00:00.000Z',
        '2018-09-19T02:00:00.000Z',
        '2018-09-19T03:00:00.000Z',
        '2018-09-19T04:00:00.000Z',
        '2018-09-19T05:00:00.000Z',
        '2018-09-19T06:00:00.000Z',
      ],
    },
    tooltop: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
};

const ReportCharts = () => {
  const [data] = useState(options);

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    />
  );
};

export default ReportCharts;
