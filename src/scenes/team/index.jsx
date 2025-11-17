import React from 'react'
import { Box , Typography , useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
       { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            mt="10px"
            p="5px"
            display="flex"
            justifyContent="center"
            color='white'
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
             <Typography color={colors.gray[100]} textTransform='uppercase' sx={{ mr: "8px" }}>
              {access}
            </Typography>
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
          </Box>
        );
      },
    },
  ];      
    
  return (
    <Box mt="20px">
      <Header title="team" subtitle="managing the team members" />
      <Box
        m="10px 0 0 0"
        height="75vh"
          sx={{
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .css-t7bxd2-MuiDataGrid-root .MuiDataGrid-cell ": {
      border: "none",
    },
    "& .MuiDataGrid-row":{
      border:'none !important'
    },
    "& .name-column--cell": {
      color: colors.greenAccent[300],
    },
    "& MuiTouchRipple-root css-r3djoj-MuiTouchRipple-root":{
      color: 'white !important',
    },
    "& .css-1mmp1x4-MuiButtonBase-root-MuiIconButton-root-MuiDataGrid-sortButton":{
      color: 'white',
      backgroundColor:`${colors.gray[800]} !important`,
      marginLeft:'10px',
      
    },
    "& .css-1mmp1x4-MuiButtonBase-root-MuiIconButton-root-MuiDataGrid-sortButton:hover ":{
      color: 'white !important',
      backgroundColor:`${colors.gray[800]}`,
      opacity:'1 !important'
    },
    "& .MuiDataGrid-row--borderBottom .MuiDataGrid-columnHeader": {
      backgroundColor: `${colors.blueAccent[300]} !important`,
      borderBottom: "none !important",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors.blueAccent[300],
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
    "& .css-1tdeh38":{
      border:'none'
    }
  }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataTeam}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}

export default Team