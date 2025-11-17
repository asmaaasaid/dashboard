import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Box mt='20px'>
        <Header title='geography chart' subtitle='simple geography chart'/>
        <Box height='75vh' >
            <GeographyChart/>
        </Box>
    </Box>
  )
}

export default Geography