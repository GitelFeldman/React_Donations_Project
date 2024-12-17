import react from 'react'
import { Link } from 'react-router-dom'
import './homePage.css';
import { useContext } from "react";
import { LinearDeterminate } from './LinearProgress'
import { convertToDollar } from './Sumerize';
import './charidy.png'
import { dollarContext } from "./dollarContext";
import Button from '@mui/material/Button';
const HomePage = ({ donations, colors }) => {
    let coin = useContext(dollarContext);
    console.log("home succees");
    let coinData = useContext(dollarContext)
    function sumDonations() {
        let sum = 0;
        donations.map((item) => { sum += item.sum_of_donate })
        return sum;
    }
    console.log("sum in dollars: " + convertToDollar(sumDonations(), coinData.coin, coinData.dollarRate));
    return (
        < div id="container">
                 <div id="info">
                    <LinearDeterminate sumDonations={(sumDonations() * 100) / 1000000} />
                    <h1 style={{ color: colors }}>
                   {coinData.coin==ּ"shekel"?"₪":"$"} {convertToDollar(sumDonations(), coinData.coin, coinData.dollarRate)} : סכום  התרומות הכולל שנתרמו עד כה
                    </h1>
                <h1 style={{ color: colors }}>{(sumDonations() * 100) / 1000000}% :אחוז התרומות שנתרמו מתוך היעד הסופי </h1>
            </div>
            <div className='links'>
                <Button variant="outlined" className='link'>
                    <Link className="routs" to="/Donations" style={{ color: colors }} >כל התרומות</Link>
                </Button>
                <Button variant="outlined" className='link'>
                    <Link className="routs" to="/Form" style={{ color: colors }}>לתרומה</Link>
                </Button>
            </div>

        </div>

    );
}

export default HomePage;


