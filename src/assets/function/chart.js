import { Chart } from 'chart.js/auto'

let arrayHourly;
let build = true;
let graph;
let timer;

function arrayHourlyBuild( h1, t1, h2, t2, h3, t3, h4, t4, h5, t5 ){
    arrayHourly = [
        { hour: h1, pluie: t1 },
        { hour: h2, pluie: t2 },
        { hour: h3, pluie: t3 },
        { hour: h4, pluie: t4 },
        { hour: h5, pluie: t5 },
    ];
    console.log(arrayHourly);
    if (build){
        graph = new Chart(
            document.getElementById('chart'),
            {
                type: 'line',
                data: {
                    labels: arrayHourly.map(row => row.hour),
                    datasets: [
                        {
                        label: 'Précipitation en mm',
                        data: arrayHourly.map(row => row.pluie),
                        backgroundColor: '#2F4C77',
                        borderColor: '#2F4C77',
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: false,
                    legend: {display: false},
                    elements: {
                        line: {
                            tension: 0.4,
                        }
                    }
                },
            }
        );
    }
    else{
        graph.update();
        //document.getElementById('chart').style.height= '100%';
    }
    build = false;
    //document.querySelector('canvas').style.width= `${document.querySelector('.chart-container').clientWidth}px`;
    //document.querySelector('canvas').style.width= '100%';
    //document.querySelector('#chart').style.height= '100%';
    //height();
};
// window.setInterval(() => {
//     graph.update();
// }, 100);
//function height(){
    //document.getElementById('chart').style.height= '100%';
    //document.getElementById('chart').style.height= `${document.querySelector('.chart-container').clientWidth}px`;
//}

export { arrayHourly, arrayHourlyBuild };