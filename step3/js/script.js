function graphCharts(targetId,type,labels,label,data) {
  var ctx = $('#'+ targetId);
  var myChart = new Chart(ctx, {
    type: type,
    data: {
        labels: labels,
        datasets: [{
            label: label,
            data: data ,
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
function graphLineChart(data) {
  graphCharts("myChart",data["type"],moment.months(),'vendite',data["data"])
}
function graphPieChart(data) {
  var nomi = Object.keys(data["data"]);
  var valori = Object.values(data["data"]);
  graphCharts("myChart2",data["type"],nomi,"",valori);

}
function graphLine2Chart(data){
  var team = Object.keys(data["data"]);
  var values = Object.values(data["data"]);
  var ctx = $('#myChart3');
  var myChart = new Chart(ctx, {
    type:data["type"] ,
    data: {
        labels: moment.months(),
        datasets: [{
            label: team,
            data:  values,
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
function printData() {
  $.ajax({
    url:"server.php",
    method: "GET",
    success: function(data) {
      graphLineChart(data["fatturato"]);
      graphPieChart(data["fatturato_by_agent"]);
      graphLine2Chart(data["team_efficiency"]);
    },
    error: function(error){
      console.log("error",error);
    }
  });
}

$(document).ready(function(){
  printData();
});
