import { Box, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import { addData } from "../../components/contexts/ContextShare";
import { useContext, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { getallusers } from "../../Services/allApi";

const Team = () => {
  // to hold all users
  const [userdata, setUserdata] = useState([]);
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { useradd, setUserAdd } = useContext(addData);
  console.log(useradd);

  // api call to get all users
  const getalluserData = async () => {
    const response = await getallusers();
    if (response.status === 200) {
      const updatedData = response.data.map((user, index) => ({
        ...user,
        id: index + 1, // Assigning a unique id to each user
      }));
      setUserdata(updatedData);
    } else {
      console.log('Cannot fetch data!!!');
    }
  }

  console.log(userdata);

  useEffect(() => {
    getalluserData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "customerName",
      headerName: "Customer Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "companyName",
      headerName: "Company Name",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
    },
    {
      field: "requireService",
      headerName: "Service",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "orderValue",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row }) => {
        const userId = row.id; // Assuming you have an "id" field in your user object
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            <Link to={`/invoice/${userId}`}>
              <Button variant="contained" color="success" sx={{ ml: "5px" }}>
                Go to Invoice
              </Button>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      {useradd && (
        <Alert variant="success" onClose={() => setUserAdd("")} dismissible>
          {useradd.customerName.toUpperCase()} Successfully Registered...
        </Alert>
      )}
      <Header title="SALES ORDERS VIEW" subtitle="Managing The Team Members" />
      <Box>
        <DataGrid rows={userdata} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;

// CSS Styles for Responsive Design
const styles = `
  .name-column--cell {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    .name-column--cell {
      font-size: 12px;
    }
  }
`;

// Append the styles to the code
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
