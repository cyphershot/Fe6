
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import PreviewIcon from '@mui/icons-material/Preview';


const Team = () =>{
 
const theme = useTheme();
const colors = tokens(theme.palette.mode);


const columns = [
    {field: "id" , headerName: "ID" },
    {
        field: "name",
        headerName: "Customer Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "age",
        headerName: "Total-Sales-Values",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "phone",
        headerName: "Order Status",
        flex: 1,
      },
      {
        field: "email",
        headerName: "Insentive value",
        flex: 1,
      },
      {
        field: "age",
        headerName: "Total-sales-value",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "accessLevel",
        headerName: "Access Level",
        flex: 1,
        renderCell: ({ row: { access } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                access === "admin"
                  ? colors.greenAccent[600]
                  : access === "manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700]
              }
              borderRadius="4px"
            >
              {access === "admin" && <PreviewIcon />}
              {access === "manager" && <SecurityOutlinedIcon />}
              {access === "user" && <LockOpenOutlinedIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>
          );
        },
      },
      
     
];


return(
    <Box m="20px">
        <Header title="SALES ORDERS VIEW" subtitle="Managing The Team Members" />
        <Box>
            <DataGrid
            rows={mockDataTeam}
            columns={columns}
            
            />

        </Box>
    </Box>
)


}


export default Team;






