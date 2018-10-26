// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- Area Chart Example
$(document).ready(function () {
    $(document).on("click", "#atualizar-grafico", function () {
        alert('oi');
    });
	
	$.ajax({
		type: "GET",
		url: 'http://u643580869.hostingerapp.com/gasto',
		success: function (data){
			console.log(data);
			$("#consumo").text(data.gasto);
		}
	});
	
	
	//pega consumo instataneo de cada medidor
	//TIRAR DO TIMEOUT PQ SE NAO HOSTINGER DETECTA LOOP E BLOQUEIA REQ
    setInterval(function () {
        $.ajax({
			type: "GET",
			url: 'http://u643580869.hostingerapp.com/consumo/individual/1',
			success: function (data){
				console.log(data);
			}
		});
	}
    ,10000);
	
    var ctx = document.getElementById("chart-line-consumo-diario");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['08AM', '09AM', '10AM', '11AM', '12AM'],
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
                data: [200, 300, 400, 200, 300],
            }
            ],
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Diário'
            },
            scales: {
                xAxes: [{
                    //type: 'time',
                    time: {
                        unit: 'hour'
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 7
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Diário'
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        //max: 40000,
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
            }, {
                label: "Previsão",
                lineTension: 0.3,
                backgroundColor: "rgba(255,140,0,0.2)",
                borderColor: "rgba(255,140,0,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(255,140,0,1)",
                pointBorderColor: "rgba(255,140,0,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(255,140,0,1)",
                pointHitRadius: 20,
                pointBorderWidth: 2,
                data: [null, null, null, null, null, null, null, null, null, 27000, 26400, 38000],
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
    var ctx = document.getElementById("chart-bar-consumo-mensal-medidor");
    var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro"],
            datasets: [{
                label: "Revenue",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
                data: [4215, 5312, 6251, 7841, 9821, 7841, 7841, 5000, 11000, 9000],
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


});