function printData() {
  $.ajax({
    url:"server.php",
    method:"GET",
    success: function(data){
      console.log(data);
      genGraph(data);
    },
    error: function(error){
      console.log("error",error);
    }
  });

}

function genGraph(elem) {
  var ctx = document.getElementById('myChart').getContext('2d');
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
});

}

$(document).ready(function(){
  printData();
});
