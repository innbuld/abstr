import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["Ethereum", "Arbitrum", "Optimism", "Bnb"],
          datasets: [
            {
              data: [30, 40, 20, 10], // Example data, replace with your data
              backgroundColor: ['#FF5733', '#36A2EB', '#4BC0C0'], // Example colors
            },
          ],
        },
      });
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} className="w-full h-auto"></canvas>
    </div>
  );
};

export default DoughnutChart;
