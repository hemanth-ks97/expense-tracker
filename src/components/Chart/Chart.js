import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPontValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxDataValue = Math.max(...dataPontValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxDataValue} label={dataPoint.label} />)}
        </div>
    )
}

export default Chart;