import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function Results() {
  const data = {
    labels: ['Yes', 'No'],
    datasets: [
      {
        label: 'Responses',
        data: [5, 3],
        backgroundColor: ['#4caf50', '#f44336']
      }
    ]
  }

  return (
    <div>
      <h3>Survey Results</h3>
      <Bar data={data} />
    </div>
  )
}

export default Results
