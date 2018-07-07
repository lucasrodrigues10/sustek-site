var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho"],
        datasets: [{
            label: 'Consumo Eletrico x Tempo',
            data: [0, 100, 200, 100, 250, 50],
            backgroundColor: 'rgb(0, 100, 200)',
            borderColor: 'rgb(50, 120, 0)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});