function printData() {
  $.ajax({
    url:"server.php",
    method:"GET",
    success: function(data){

      var graph_line = data.fatturato;
      // console.log(graph_line);
      geneGraphLine(graph_line.type,graph_line.data);

      var graph_pie = data.fatturato_by_agent;
      var fatturatoAgent = graph_pie.data;
      // console.log(fatturatoAgent);
      var num = [];
      var nomi = Object.keys(fatturatoAgent);
      console.log(nomi);
      for (var variable in fatturatoAgent) {
        // console.log(fatturatoAgent);
        num.push(fatturatoAgent[variable]);
        // console.log(num);
      }
      geneGraphPie(graph_pie.type,nomi,num);
    },
    error: function(error){
      console.log("error",error);
    }
  });

}
function geneGraphPie(type,labels,data) {
  var ctx = $('#myChart2');
  var myChart = new Chart(ctx, {
    type: type,
    data: {
        labels: labels,
        datasets: [{
            label: "",
            data: data ,
            backgroundColor: [
             'rgba(255, 99, 132, 0.99)',
             'rgba(54, 162, 235, 0.99)',
             'rgba(255, 206, 86, 0.99)',
             'rgba(75, 192, 192, 0.99)'
           ],
           borderColor: [
             'rgb(251, 0, 0)',
             'rgb(251, 0, 0)',
             'rgb(251, 0, 0)',
             'rgb(251, 0, 0)'
           ],
        }]
    },
  });
}
function geneGraphLine(type,data) {
  var ctx = $('#myChart');
  var myChart = new Chart(ctx, {
    type: type,
    data: {
        labels: moment.months(),
        datasets: [{
            label: 'vendite',
            data: data ,
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
