import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data) {
      const width = 300; // Adjust the width as needed
      const height = 300; // Adjust the height as needed
      const radius = Math.min(width, height) / 2;

      const svg = d3.select(chartRef.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

      const color = d3.scaleOrdinal().domain(data).range(d3.schemeCategory10);

      const pie = d3.pie();

      const arcs = pie(data);

      const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

      const labelArc = d3.arc()
        .innerRadius(radius - 40)
        .outerRadius(radius - 40);

      svg.selectAll('path')
        .data(arcs)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data));

      svg.selectAll('text')
        .data(arcs)
        .enter()
        .append('text')
        .attr('transform', d => `translate(${labelArc.centroid(d)})`)
        .text(d => `${d.data.label} (${Math.round((d.endAngle - d.startAngle) / (2 * Math.PI) * 100)}%)`);
    }
  }, [data]);

  return (
    <div ref={chartRef} style={{ background: 'white' }}></div>
  );
};

export default DoughnutChart;
