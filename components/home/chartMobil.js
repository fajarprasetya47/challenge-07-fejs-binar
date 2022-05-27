import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartMobil() {
    const data = {
        labels: ['Avanza', 'Xenia', 'Innova', 'Hiace', 'BMW'],
        datasets: [
            {
                label: '# of Votes',
                data: [22, 19, 10, 5, 2,],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <section id="chart-mobil">
                <div className='text-center'>
                    <h3>Most Interest Cars</h3>
                    <p>Mobil yang banyak diminati</p>
                </div>
                <div className='mx-5'>
                    <Pie data={data} redraw={true} />
                </div>
            </section>
        </>
    )
}