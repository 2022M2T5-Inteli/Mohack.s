const DBPATH = 'banco.db';
var dataNotes = [];
const CHART = document.getElementById("myChart");

$.ajaxSetup({async:false});
$(document).ready(function (){
    $.get("http://127.0.0.1:3082/Respostas/1", function(resultado) {
        dataNotes.push(resultado[0].notaTotal);
    })

    $.get("http://127.0.0.1:3082/Respostas/2", function(resultado) {
        dataNotes.push(resultado[0].notaTotal);
    })

    $.get("http://127.0.0.1:3082/Respostas/3", function(resultado) {
        dataNotes.push(resultado[0].notaTotal);
    })

    $.get("http://127.0.0.1:3082/Respostas/4", function(resultado) {
        dataNotes.push(resultado[0].notaTotal);
    })

    const myChart = new Chart(CHART, {
        type: 'radar',
        data: {
            labels: ['Formulação Estratégica', 'Gerenciamento pelas Diretrizes', 'Gestão de Projetos', 'Gerenciamento da Rotina'],
            datasets: [{
                label: 'Escola',
                data: dataNotes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    

})