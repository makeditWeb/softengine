 const leftGridChartCTX = document.getElementById('leftGridChart');
 const rightPieChartCTX = document.getElementById('rightPieChart');

  new Chart(leftGridChartCTX, {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', ''],
      datasets: [
        {
          label: 'Tx Bytes Rate',
          data: [0, 0, 0, 0, 0],
          borderWidth: 1
        }, 
        {
          label: 'Rx Bytes Rate',
          data: [0, 0, 0, 0, 0],
          borderWidth: 2
        }
      ]
    },
    options: {
      scales: {
        y: {
          min: -1.0,
          max: 1.0
        }
      }
    }
  });


new Chart(rightPieChartCTX, {
  type: 'pie',
  data: {
    labels: ['0.0.0', '10.2.2', '3.3.2', '3.4.2', '5.4.3', '7.4.2', '8.4.5', '9.2.2'],
    datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
    }]
  },
  options: {
    responsive: true
  }
});