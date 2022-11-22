import { Chart } from 'chart.js/auto';
import { arrayHourly } from '../index.js';

function Chart1(){
    new Chart(
        document.getElementById('chart'),
        {
          type: 'bar',
          data: {
            labels: arrayHourly.map(row => row.hour),
            datasets: [
              {
                label: 'hello',
                data: arrayHourly.map(row => row.pluie)
              }
            ]
          }
        }
    );
};
export default Chart1;
