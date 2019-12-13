function printData() {
  $.ajax({
    url:"server.php",
    method:"GET",
    success: function(data){
      genGraph(data);
    },
    error: function(error){
      console.log("error",error);
    }
  });

}

function genGraph(elem) {
  var ctx = $('#myChart');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: moment.months(),
        datasets: [{
            label: 'vendite',
            data:elem ,
            backgroundColor: [
                'rgba(0, 251, 34, 0.99)'
            ],
            borderColor: [
              'rgb(251, 0, 0)'
            ],
            pointBackgroundColor: [
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)',
              'rgb(251, 0, 0)'
            ],
        }]
    },
    options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero: true
               }
           }]
       }
   }
});

}

$(document).ready(function(){
  printData();
});
