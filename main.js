/*jshint esversion: 6*/
window.addEventListener('resize', function () { 
    var win = this.outerWidth;
    if (win > 1160) { 
        this.setTimeout(function () { 
            location.reload();
        },200);
    }
});
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.doughnut.cutoutPercentage = 80;
let ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['MON', 'TUE', 'WED', 'THUS', 'FRI', 'SAT', 'SUN'],
        datasets: [{
            label: 'Active users',
            data: [12, 19, 33, 15, 22, 23, 20, 30, 40],
            borderColor: '#00A676',
        },
        {
            label: 'New users',
            data: [22, 29, 13, 25, 32, 43, 10, 35, 10],
            borderColor: 'yellow',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false
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
let ctx2 = document.getElementById('mydo').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['active players', 'New Players', 'Old Players'],
        datasets: [{
            data: [60, 15, 25],
            fill: false,
            borderColor: 'transparent',
            backgroundColor: ['#00A676' ,'#247B7B', '#30C5FF']
        }]        
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
            display: true,
            text: 'Active Players',
            position: 'bottom',
            fontColor: 'white',
            fontSize: '16',
        },
        legend: {
            display: false,
        }
    }
});
let ctx4 = document.getElementById('mybar').getContext('2d');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['11jul', '12jul', '13jul', '14jul', '15jul', '16jul', '17jul', '18jul', '19jul', '20jul' ],
        datasets: [{
            data: [12, 19, 33, 15, 22, 23, 20, 25, 30, 48],
            backgroundColor: '#00A676',
        },
        {
            data: [22, 29, 13, 35, 12, 43, 10, 15, 50, 28],
            backgroundColor: 'yellow',
        }]        
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
            display: true,
            text: 'Active Players',
            position: 'bottom',
            fontColor: 'white',
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
let y = document.querySelector('.cover');
let x = document.querySelector('#sidenav');
function reveal() {  
    if (x.style.transform === 'translateX(-60px)') {
        x.style.transform = 'translateX(0)';
        y.style.opacity = '1';
        y.style.pointerEvents = 'all';
    }
    else { 
        hide();
    }
}
function hide() { 
    x.style.transform = 'translateX(-60px)';
    y.setAttribute('style', "opacity:0;pointer-events:none");
}
function toggle() {
    let s = document.querySelector('#switch');
    let html = document.getElementsByTagName('html')[0];
    let icon = document.querySelectorAll('.icon');
    if (s.checked) {
        html.setAttribute("style", "--accentColor: #e6e6e6;--darkColor: white;--wb: black");
        icon.forEach("style", "filter:invert(0);background-color:");
    }
    else { 
        html.setAttribute("style", "--accentColor: #23262e;--darkColor: #14161B;--wb: white");
    }
}
