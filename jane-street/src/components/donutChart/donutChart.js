import "./donutChart.css"
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material';

const data = [
  { label: 'Walking', value: 400, color: '#0088FE' },
  { label: 'Cycling', value: 300, color: '#00C49F' },
  { label: 'Car Pooling', value: 300, color: '#FFBB28' },
  { label: 'Public Transportation', value: 200, color: '#FF8042' },
];

const StyledText = styled('text')(() => ({
  fill: "black",
  textAnchor: 'middle',
  dominantBaseline: 'central',
  width: 70,
  textWrap: "wrap",
  fontSize: 20,
}));

function PieCenterLabel(){
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
        CO2
    </StyledText>
  );
}

function DonutChart(){
    return(
        <div id="chart">
            <h2>Carbon Emissions Prevented</h2>
            <PieChart
                id="pieChart"
                series={[{ innerRadius: 80, outerRadius: 130, data, arcLabel: 'label', arcLabelRadius: '60%'}]}
                hideLegend
            >
                <PieCenterLabel>Class</PieCenterLabel>
            </PieChart>
        </div>

    )
}

export default DonutChart;