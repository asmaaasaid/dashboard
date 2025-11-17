import React from 'react'
import { Typography , Box , useTheme } from '@mui/material'
import { tokens } from '../theme';
const Header = ({title , subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <Box >
      <Typography
        variant="h3"
        color={colors.gray[100]}
        textTransform='uppercase'
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>

      <Typography variant='h5' textTransform='capitalize' color={colors.greenAccent[400]}> {subtitle} </Typography>
    </Box>
  );
}

export default Header