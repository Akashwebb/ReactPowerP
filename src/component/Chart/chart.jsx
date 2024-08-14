import React from 'react';
import { Chart } from 'primereact/chart';

const PopulationChart = () => {
  // Sample data for population increase per year
  const populationData = require("./dd.json")

  const labels = populationData.map(entry => entry.year);
  const data = populationData.map(entry => entry.populationIncrease);
      
  // Chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          'green',
          'blue',
          'grey',
          'brown',
          'yellow',
          'violet',
          'red',
          
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          'green',
          'blue',
          'grey',
          'brown',
          'yellow',
          'violet',
          'red'
        ]
      }
    ]
  };

  // Chart options
  const chartOptions = {
    title: {
      display: true,
      text: 'Population Increase Per Year'
    }
  };

  return (
    <div>
      <h2>Population Increase Chart</h2>
      <h2> 1. Pie Chart</h2>
      <Chart type="pie" data={chartData} options={chartOptions} style={{width: '400px', height: '400px'}} />
      <br/> 
      <h1> ---------------------------------------------------------------------------------------------- </h1>
       <h2> 2. Dough </h2>
      <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem"  style={{width: '400px', height: '400px'}} />
        <h1>--------------------------------------------------------------------------------------------</h1>
         <h2> 3. Bar </h2>
         <Chart type="bar" data={chartData} options={chartOptions}  style={{width: '800px', height: '300px'}} />
          <br/>
          <br/> <br/>
          <br/> <br/>
         <h1>--------------------------------------------------------------------------------------------</h1>
           <h1> 4. Redar </h1>
         <Chart type="radar" data={chartData} options={chartOptions} className="w-full md:w-30rem" style={{width: '600px', height: '400px'}} />
         <br/> <br/>
        
    </div>
  );
};

export default PopulationChart;
