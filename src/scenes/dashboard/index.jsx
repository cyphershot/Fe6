import Header from "../../components/Header"
import { Box,Button,  useTheme  }  from "@mui/material"
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import './style.css'
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { Link } from 'react-router-dom';


const Dashboard = () => {

 const theme = useTheme()
 const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
  
          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
            
        </Box>
          {/* cards */}
 

          <div className="cards-list">
          <Link to="/form" style={{ textDecoration: 'none'  }}>

      <div className="card 1">
        <div className="card_image">

        </div>
        <div className="card_title ">
          <div className="icons" >
            <PeopleOutlinedIcon />
            </div>
          <p>Create new sales order</p>
        </div>
      </div>
      </Link>
 
      <Link to="/team" style={{ textDecoration: 'none',   }}>
      <div className="card 2">
        
        <div className="card_image">
        </div>
        <div className="card_title "> 
            <ContactsOutlinedIcon />
        <p>View/Edit Sales Order</p>
          
        </div>
        
      </div>
      </Link>

      <Link to="/invoice" style={{ textDecoration: 'none',   }}  >
      <div className="card 3">
        <div className="card_image">
        </div>
        <div className="card_title">
            <ReceiptOutlinedIcon />     
          <p>Invoice Balance</p>
        </div>
      </div>
      </Link>

    
    </div>

        


        </Box>
    
    );
}

export default Dashboard