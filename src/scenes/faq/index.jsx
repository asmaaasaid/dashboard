import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {Typography , Box , useTheme} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {tokens} from '../../theme'
import Header from '../../components/Header'

const FAQ = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <Box mt='20px'>
        <Header title="faq" subtitle="frequently asked questions page" />
        <Accordion  defaultExpanded sx={{mt:'20px',
           backgroundColor:colors.greenAccent[500],
           color:colors.primary[400],
        }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant='h5' textTransform='capitalize'>an important question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{
           backgroundColor:colors.greenAccent[500],
           color:colors.primary[400],
        }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h5" textTransform='capitalize'>another important question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{
           backgroundColor:colors.greenAccent[500],
           color:colors.primary[400],
        }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant='h5' textTransform='capitalize'>some random question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion  sx={{
           backgroundColor:colors.greenAccent[500],
           color:colors.primary[400],
        }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant='h5' textTransform='capitalize'>follower question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion  sx={{
           backgroundColor:colors.greenAccent[500],
           color:colors.primary[400],
        }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant='h5' textTransform='capitalize'>expected result question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{
           backgroundColor:colors.greenAccent[500],
           color:colors.primary[400],
        }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant='h5' textTransform='capitalize'>the final question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Box>
    );
}
export default FAQ;