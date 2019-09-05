/*jshint esversion: 6*/
window.addEventListener('resize', function () { 
    this.setTimeout(function () { 
        location.reload();
    },200);
});

Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.doughnut.cutoutPercentage = 80;
let ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['MON', 'TUE', 'WED', 'THUS', 'FRI', 'SAT', 'SUN'],
        datasets: [{
            data: [12, 19, 33, 15, 22, 23, 20],
            fill: false,
            borderColor: 'orange',
        },
        {
            data: [2, 9, 3, 5, 22, 3, 30],
            fill: false,
            borderColor: '#F6CB83 ',
        },
        {
            data: [22, 29, 13, 25, 42, 23, 40],
            fill: false,
            borderColor: '#632D47',
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
    }
});
let ctx2 = document.getElementById('mydo1').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['New Players', 'Old Players'],
        datasets: [{
            data: [75, 25],
            fill: false,
            borderColor: 'transparent',
            backgroundColor: ['#FFD285']
        }]        
    },
    options: {
        title: {
            display: true,
            text: 'Active Players',
            position: 'bottom',
            fontColor: '#FFD285',
            fontSize: '16',
        },
        legend: {
            display: false,
        }
    }
});
let ctx3 = document.getElementById('mydo2').getContext('2d');
new Chart(ctx3, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [58,42],
            fill: false,
            borderColor: 'transparent',
            backgroundColor: ['orange']
        }]        
    },
    options: {
        title: {
            display: true,
            text: 'Revisited',
            position: 'bottom',
            fontColor: '#FFD285',
            fontSize: '16'
        },
        legend: {
            display: false,
        }
    }
});
let ctx4 = document.getElementById('mybar1').getContext('2d');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['11jul', '12jul', '13jul', '14jul', '15jul', '16jul', '17jul', '18jul', '19jul', '20jul' ],
        datasets: [{
            data: [12, 19, 33, 15, 22, 23, 20, 25, 30, 48],
            backgroundColor: '#632D47',
        }]        
    },
    options: {
        title: {
            display: true,
            text: 'Active Players',
            position: 'bottom',
            fontColor: '#FFD285',
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    display: false
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                zeroLineColor: 'tranparent',
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        },
    }
});
let ctx5 = document.getElementById('mybar2').getContext('2d');
new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['11jul', '12jul', '13jul', '14jul', '15jul', '16jul', '17jul', '15jul', '16jul', '17jul', '15jul', '16jul', '17jul', ],
        datasets: [{
            data: [12, 19, 33, 15, 22, 23, 20, 15, 22, 23, 20, 20, 15, 22, 23, 20],
            backgroundColor: 'orange',
        }]        
    },
    options: {
        title: {
            display: true,
            text: 'Revisited',
            position: 'bottom',
            fontColor: '#FFD285',
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    display: false
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                zeroLineColor: 'tranparent',
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        },
    }
});
let ctx6 = document.getElementById('mybar3').getContext('2d');
new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['11jul', '12jul', '13jul', '14jul', '15jul', '16jul', '17jul', '12jul', '13jul', '14jul', '15jul', '16jul', '17jul', ],
        datasets: [{
            data: [12, 19, 33, 15, 22, 23, 20, 19, 33, 15, 22, 23, 20],
            backgroundColor: '#FFD285',
        }]        
    },
    options: {
        title: {
            display: true,
            text: 'New Players',
            position: 'bottom',
            fontColor: '#FFD285',
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    display: false
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                zeroLineColor: 'tranparent',
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        },
    }
});