const DBPATH = 'banco.db';
var dataNotes = "http://127.0.0.1:3082/Alternativainsert"
const CHART = document.getElementById("myChart");
console.log(CHART);
const myChart = new Chart(CHART, {
    type: 'radar',
    data: {
        labels: ['Eixo1', 'Eixo2', 'Eixo3', 'Eixo4', 'Eixo5', 'Eixo6'],
        datasets: [{
            label: '# of Votes',
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
