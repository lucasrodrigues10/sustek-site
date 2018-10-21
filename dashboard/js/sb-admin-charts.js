// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- Area Chart Example
var ctx = document.getElementById("chart-line-consumo-anual");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [{
            label: "Real",
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 20,
            pointBorderWidth: 2,
            data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 0, 0],
        },{
            label: "Previsão",
            lineTension: 0.3,
            backgroundColor: "rgba(216,100,2,0.2)",
            borderColor: "rgba(216,100,2,0.2)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(216,100,2,0.2)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(216,100,2,0.2)",
            pointHitRadius: 20,
            pointBorderWidth: 2,
            data: [null, null, null, null, null, null, null, null, null, 27000, 26400, 34000],
        }
        ],
    },
    options: {
        title: {
            display: true,
            text: 'Consumo Anual'
        },
        scales: {
            xAxes: [{
                time: {
                    unit: 'date'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 7
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Mês'
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 40000,
                    maxTicksLimit: 5
                },
                gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Energia(kWh)'
                }
            }],
        },
        legend: {
            display: true
        }
    }
});
// -- Bar Chart Example
var ctx = document.getElementById("chart-bar-consumo-mensal");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [{
            label: "Revenue",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [4215, 5312, 6251, 7841, 9821, 14984],
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Consumo Mensal'
        },
        scales: {
            xAxes: [{
                time: {
                    unit: 'month'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
});
// -- Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["TV", "Geladeira", "Computador", "Pipoqueira"],
        datasets: [{
            data: [15.21, 100.58, 21.25, 10.32],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});
