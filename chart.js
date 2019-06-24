// eslint-disable-next-line no-unused-vars
function makeBusChart(){ //used in other file
  var busChartCanvas = document.getElementById('busMallResults');
  var percents = [];
  var names = [];
  for (var i = 0; i < PhotoPicture.allImages.length; i++){ //used in other file
    var p = Math.floor((PhotoPicture.allImages[i].timesClicked / PhotoPicture.allImages[i].timesShown) *100);
    names.push(PhotoPicture.allImages[i].name);
    percents.push(p);
    var colorClicks = percents;
    localStorage.setItem('savedClicks', JSON.stringify(colorClicks));
  }
  var chartData = {
    labels: names,
    datasets: [{
      label: '# of Votes',
      data: percents,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 200, 192, 1)',
        'rgba(75, 192, 90, 1)',
        'rgba(90, 192, 192, 1)',
        'rgba(75, 98, 192, 1)',
        'rgba(45, 0, 192, 1)',
        'rgba(255, 192, 192, 7)',
        'rgba(75, 54, 192, 1)',
        'rgba(75, 34, 178, 1)',
        'rgba(0, 192, 192, 3)',
        'rgba(75, 0, 10, 1)',
        'rgba(0, 192, 0, 1)',
        'rgba(75, 19, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 0, 0, 0.3)',
        'rgba(0, 255, 0, 0.3)',
        'rgba(0, 0, 255, 0.3)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 200, 192, 1)',
        'rgba(75, 192, 90, 1)',
        'rgba(90, 192, 192, 1)',
        'rgba(75, 98, 192, 1)',
        'rgba(45, 0, 192, 1)',
        'rgba(255, 192, 192, 7)',
        'rgba(75, 54, 192, 1)',
        'rgba(75, 34, 178, 1)',
        'rgba(0, 192, 192, 3)',
        'rgba(75, 0, 10, 1)',
        'rgba(0, 192, 0, 1)',
        'rgba(75, 19, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 0, 0, 0.3)',
        'rgba(0, 255, 0, 0.3)',
        'rgba(0, 0, 255, 0.3)'

      ],
      borderWidth: 1
    }]
  };
  var busChartObject = {
    type : 'bar',
    data : chartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  var busChart = new Chart(busChartCanvas, busChartObject);//used in other file
}
