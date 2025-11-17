import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box mt='20px'>
        <Header title='line chart' subtitle='simple line chart'/>
        <Box height='75vh'>
            <LineChart/>
        </Box>
    </Box>
  )
}

export default Line