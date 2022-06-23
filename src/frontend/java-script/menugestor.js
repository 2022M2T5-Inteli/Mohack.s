anychart.onDocumentReady(function () {

    // our data from bulbapedia
    var data1 = [
      {x: "Formulação Estratégica", value: 65},
      {x: "Gestão pelas Diretrizes", value: 39},
      {x: "Gestão de Projetos", value: 43},
      {x: "Gestão da Rotina", value: 50},
      {x: "Gestão de Pessoas", value: 60},
      {x: "Attack", value: 52}
    ];
  
    var data2 = [
      {x: "Formulação Estratégica", value: 45},
      {x: "Gestão pelas Diretrizes", value: 45},
      {x: "Gestão de Projetos", value: 49},
      {x: "Gestão da Rotina", value: 65},
      {x: "Gestão de Pessoas", value: 65},
      {x: "Attack", value: 49}
    ];  
  
    var data3 = [
      {x: "Formulação Estratégica", value: 43},
      {x: "Gestão pelas Diretrizes", value: 44},
      {x: "Gestão de Projetos", value: 65},
      {x: "Gestão da Rotina", value: 64},
      {x: "Gestão de Pessoas", value: 50},
      {x: "Attack", value: 48}
    ];  
  
    // create radar chart
    var chart = anychart.radar();
  
    // set chart yScale settings
    chart.yScale()
      .minimum(35)
      .maximum(65)
      .ticks({'interval':5});
  
    // color alternating cells
    chart.yGrid().palette(["gray 0.1", "gray 0.2"]);
  
    // create first series
    chart.area(data1).name('Escola1').markers(true).fill("#E55934", 0.3).stroke("#E55934")
    // create second series
    chart.area(data2).name('Escola2').markers(true).fill("#9BC53D", 0.3).stroke("#9BC53D")
    // create third series
    chart.area(data3).name('Escola3').markers(true).fill("#5BC0EB", 0.3).stroke("#5BC0EB")
      
    // set chart title
    chart.title("Diagrama das Escolas")
    // set legend
    .legend(true);
  
    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
  
  });