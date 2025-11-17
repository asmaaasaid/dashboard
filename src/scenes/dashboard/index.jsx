import { Box , Button , IconButton , Typography , useTheme} from "@mui/material"
import Header from "../../components/Header";
import {tokens} from "../../theme";
import {mockTransactions} from "../../data/mockData";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box pb='20px'>
      <Box  mt='20px'>
        <Header title='admin panel' subtitle='welcome to your panel control' />
      


</Box>
      {/* grid&charts */}
      <Box
      display="grid"
      gridTemplateColumns='repeat(12 ,1fr)'
      gridAutoRows="140px"
      gap="20px"
      mt='30px'
       textTransform='capitalize'
      >
        {/* row 1 */}
        <Box
        gridColumn='span 3'
        backgroundColor={colors.primary[400]}
        display='flex'
        justifyContent='center'
        alignItems='center'
        
        >
          <StatBox
          title='12,361'
          subtitle='emails sent'
          progress='0.75'
          increase='+14%'
          icon={
            <EmailIcon 
            sx={{color:colors.greenAccent[600] , fontSize:'20px'}}
            />
          }
          />

        </Box>
         <Box
        gridColumn='span 3'
        backgroundColor={colors.primary[400]}
        display='flex'
        justifyContent='center'
        alignItems='center'
        >
          <StatBox
          title='431,225'
          subtitle='sales obtained'
          progress='0.5'
          increase='+21%'
          icon={
            <PointOfSaleIcon 
            sx={{color:colors.greenAccent[600] , fontSize:'20px'}}
            />
          }
          />

        </Box>
         <Box
        gridColumn='span 3'
        backgroundColor={colors.primary[400]}
        display='flex'
        justifyContent='center'
        alignItems='center'
        >
          <StatBox
          title='32,441'
          subtitle='new clients'
          progress='0.30'
          increase='+5%'
          icon={
            <PersonAddIcon
            sx={{color:colors.greenAccent[600] , fontSize:'20px'}}
            />
          }
          />

        </Box>
         <Box
        gridColumn='span 3'
        backgroundColor={colors.primary[400]}
        display='flex'
        justifyContent='center'
        alignItems='center'
        >
          <StatBox
          title='1,325,134'
          subtitle='traffic inbound'
          progress='0.80'
          increase='+43%'
          icon={
            <TrafficIcon 
            sx={{color:colors.greenAccent[600] , fontSize:'20px'}}
            />
          }
          />

        </Box>

        {/* row 2 */}
        <Box 
        gridColumn='span 8'
        gridRow='span 2'
        backgroundColor={colors.primary[400]}
        textTransform='capitalize'
        >
          <Box mt='25px' p='0px 30px' display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
            <Typography variant="h5" fontWeight='600' color={colors.gray[200]}>
              revenue generated
            </Typography>
            <Typography variant="h3" fontWeight='500' color={colors.greenAccent[500]}>
              $59,342,42
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlinedIcon sx={{fontSize:'26px', color:colors.greenAccent[500]}}/>
            </IconButton>
          </Box>
          </Box>
          
          
           <Box height='250px' mt='-20px'>
          <LineChart isDashboard={true} />
        </Box>
 </Box>
        {/* transaction */}
        <Box
        gridColumn='span 4'
        gridRow='span 2'
        backgroundColor={colors.primary[400]}
        overflow='auto'
        textTransform='capitalize'
        >
          <Box
          displa='flex'
          justifyContent='space-between'
          alignItems='center'
          borderBottom={`1px solid ${colors.primary[600]}`}
          color={colors.gray[800]}
          p='15px'
          >
            <Typography variant="h5" fontWeight='600' color={colors.gray[200]}>
              recent transaction
            </Typography>
          </Box>
          
          {mockTransactions.map((transaction,i)=>{
            return(
              <Box
              key={transaction.txId}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`1px solid ${colors.primary[600]}`}
              p='15px'
              >
                <Box>
                  <Typography color={colors.greenAccent[500]} variant="h5" fontWeight='600'>
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.gray[200]} variant="h5" fontWeight='600'>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box>{transaction.date}</Box>
                <Box
                 backgroundColor={colors.greenAccent[300]} 
                color={colors.gray[900]} 
                p='5px 10px' borderRadius='4px'>
                  ${transaction.cost}
                </Box>
              </Box>
            )
          })}
        </Box>

        {/* row 3 */}
        <Box
        gridColumn='span 3'
        gridRow='span 2'
        backgroundColor={colors.primary[400]}
        p='30px'
        textTransform='capitalize'
        
        >
          <Typography variant="h5" fontWeight='600' color={colors.gray[200]}>
            campaign
          </Typography>
          <Box display='flex' flexDirection='column' alignItems='center' mt='25px'>
            <ProgressCircle size="125"/>
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{mt:'15px'}}>
              $48,532 revenue generated
            </Typography>
            <Typography >
            includes extra misc expenditures and costs
          </Typography>

          </Box>

        </Box>
        <Box
        gridColumn='span 5'
        gridRow='span 2'
        backgroundColor={colors.primary[400]}
        
        textTransform='capitalize'
        >
          <Typography color={colors.gray[200]} variant="h5" fontWeight='600' sx={{p:'30px 30px 0px 30px'}}>
            sales quantity
          </Typography>
          <Box height='250px' mt='-20px'>
           <BarChart isDashboard={true}/>

          </Box>

        </Box>
        <Box
        gridColumn='span 4'
        gridRow='span 2'
        backgroundColor={colors.primary[400]}
        
        textTransform='capitalize'
        >
          <Typography variant="h5" color={colors.gray[200]} fontWeight='600' sx={{p:'30px 30px 0px 30px'}}>
            geography based traffic
          </Typography>
          <Box height='200px' mt='20px'>
           <GeographyChart isDashboard={true}/>

          </Box>

        </Box>
       
      </Box>
    </Box>
    
  )
}

export default Dashboard