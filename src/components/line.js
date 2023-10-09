import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [
            {
              label: 'My Dataset',
              data: [10, 20, 15, 30, 25],
              borderColor: 'rgba(75, 192, 192, 1)', // Line color
              borderWidth: 2, // Line width
              fill: false, // Don't fill area under the line
            },
          ],
        },
      });
    }
  }, []);

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
