import { Timer } from "./Timer";
import './Donate.css';
import { useContext } from "react";
import { dollarContext } from "./dollarContext";
import { convertFromShekel } from "./Sumerize";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Donate = ({don,colors}) => { 
    console.log("donate succees");
  
    let coinData=useContext(dollarContext)
    console.log("coin in donate: "+coinData.coin);
     return ( 
    <Card sx={{ minWidth: 275 }} className="card">
    <CardContent  style={{color:colors}}>
        <Typography id="donateName" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {don.full_name}
        </Typography>
        <Typography variant="h3" component="div">
        {coinData.coin=="shekel" ? "₪" : "$"}
         {convertFromShekel(don.sum_of_donate,coinData.coin,coinData.dollarRate)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Timer time={don.date}/>
        </Typography>
        <Typography variant="body2">
        {don.dedication}</Typography>
      </CardContent>
        </Card>
    
    
    
    );
}
 
export default Donate;



