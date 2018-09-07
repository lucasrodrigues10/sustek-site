var ctx = document.getElementById("line-chart").getContext('2d');


var linechart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho"],
        datasets: [{
            label: 'Consumo Eletrico x Tempo',
            data: [0, 100, 200, 100, 250, 50],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "blue",
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

var ctx = document.getElementById("pie-chart").getContext('2d');


var piechart = new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["Televisão", "Computador", "Microondas", "Freezer"],
        datasets: [{
            label: "Energia (kWh)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
            data: [2478,5267,734,784]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Consumo de Energia por Equipamento'
        }
    }
});