'use client';

import { Chart } from 'react-google-charts';

const BubbleChart = ({ title, data }) => {
  const options = {
    title,
    hAxis: {
      title: 'Satisfaction',
      baseline: 5,
      viewWindow: {
        min: -3,
        max: 15,
      },
      ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    vAxis: {
      title: 'Importance',
      baseline: 5,
      viewWindow: {
        min: -3,
        max: 15,
      },
      ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    bubble: {
      textStyle: {
        fontSize: 11,
      },
    },
    sizeAxis: {
      minValue: 1,
      maxValue: 100,
    },
  };

  if (!data.length) return (
    <>
      <h2>{title}</h2>
      <p>No key areas added yet. Add one now to map it on the bubble chart.</p>
    </>
  )

  return (
    <Chart
      chartType="BubbleChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
      loader={<div>Loading chart...</div>}
    />
  );
};

export default BubbleChart;
