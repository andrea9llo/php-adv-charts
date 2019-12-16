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
  var team1 = {
    label: team[0],
    data: values[0],
    borderColor:"red"
  };
  var team2 = {
    label: team[1],
    data: values[1],
    borderColor:"blue"
  };
  var team3 = {
    label: team[2],
    data: values[2],
    borderColor:"yellow"
  };
  var teams = {
    labels:moment.months(),
    datasets:[team1,team2,team3]
  };

  var myChart = new Chart(ctx, {
    type:data["type"] ,
    data:teams,
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
function getAccessGraph() {
  var urlParams = new URLSearchParams(window.location.search);
  var accessParam = urlParams.get("access");
  return accessParam;

}
function printData() {
  var access = getAccessGraph();
  $.ajax({
    url:"getAllAccess.php",
    method: "GET",
    data: {
      access: access,
    },
    success: function(data) {
      console.log(data);
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
