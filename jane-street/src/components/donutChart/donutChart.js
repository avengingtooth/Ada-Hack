import "./donutChart.css"
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material';

const StyledText = styled('text')(() => ({
  fill: "black",
  textAnchor: 'middle',
  dominantBaseline: 'central',
  // backgroundColor: "white",
  width: 70,
  textWrap: "wrap",
  fontSize: 20,
  fontWeight: 600,
}));

function PieCenterLabel(){
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
        CO2
    </StyledText>
  );
}

function DonutChart({points}){
    const data = [
      { label: 'Walking', value: points.walking, color: '#A1D99B' },
      { label: 'Cycling', value: points.cycling, color: '#41AB5D' },
      { label: 'Car Pooling', value: points.carPooling, color: '#238B45' },
      { label: 'Public Transportation', value: points.publicTransportation, color: '#00441B' },
      { label: 'Other', value: points.other, color: '#6A953F' }
    ];
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