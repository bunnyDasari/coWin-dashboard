// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
const VaccinationByAge = props => {
  const {vacciantionPiedata} = props
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={vacciantionPiedata}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Telugu" fill="#fecba6" />
            <Cell name="Hindi" fill="#b3d23f" />
            <Cell name="English" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
