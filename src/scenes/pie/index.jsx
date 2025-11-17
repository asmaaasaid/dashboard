import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box mt='20px'>
        <Header title='pie chart' subtitle='simple pie chart'/>
        <Box height='75vh'>
            <PieChart/>
        </Box>
    </Box>
  )
}

export default Pie