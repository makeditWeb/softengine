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
        },
      }
    }
  });


new Chart(rightPieChartCTX, {
  type: 'pie',
  data: {
    labels: ['0.0.0', '10.2.2', '3.3.2', '3.4.2', '5.4.3', '7.4.2', '8.4.5', '9.2.2'],
    datasets: [{
    label: 'My First Dataset',
    data: [, ,,,,,,99], 
    backgroundColor: [
      'rgb(135, 255, 125)',
      'rgb(230, 126, 129)',
      'rgb(205, 127, 129)',
      'rgb(240, 126, 130)',
      'rgb(249, 202, 129)',
      'rgb(214, 126, 128)',
      'rgb(139, 119, 182)',
      'rgb(248, 126, 129)',
    ],
    hoverOffset: 4
    }]
  },
  options: {
    responsive: false, 
    maintainAspectRatio: true,
    layout: {
        padding: 12
    },
    radius: '100%',
    spacing: 0,
    aspectRatio: 2,

    // legend: {
    //   display: false,
    //   fullWidth: true,
    //   position: 'top',
    // },
  }
    
});
