import React from 'react'
import { Box ,useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';


const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
    { field: "id", headerName: "ID" },
    { field: "registrarId", headerName: "Registrar Id" , flex:1 },
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    
  ];      
    
  return (
    <Box mt="20px">
      <Header title="contacts" subtitle="list of contacts for future refrences" />
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
      color: `${colors.greenAccent[400]} !important`,
    },
    "& .css-1tdeh38":{
      border:'none'
    },
    "& .css-1e8d8dc-MuiDataGrid-toolbar":{
        border:'none'
    },
    "& .css-1e8d8dc-MuiDataGrid-toolbar button":{
        color:'whitesmoke'
    },
    "& .css-1e8d8dc-MuiDataGrid-toolbar button:hover":{
        color:colors.blueAccent[500]
    },
  }}
      >
        <DataGrid
          rows={mockDataContacts}
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
          showToolbar 
        />
      </Box>
    </Box>
  );
}

export default Contacts;