import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Donations from './Donations';
import Form from './Form';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage';
import InputLabel from '@mui/material/InputLabel';
import Fab from '@mui/material/Fab';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';

import axios from "axios";
import { dollarContext } from './dollarContext';
function App() {
  let [colors, setColors] = useState();//הצבע שנבחר
  let [dollarRate, setDollarRate] = useState()//ערך הדולר עכשיו
  let [coin, setCoin] = useState("shekel")//סוג המטבע שנבחר
  let [isSucsses, setIsSucsses] = useState(true)//האם הגישה לשרת הצליחה
  useEffect(() => {
    axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_L3BxuPStnaDPDZTIXTY09VcoNbLFminb9d0NcLl4")
      .then(res => {
        console.log("dollarRate in app1: " + res.data.data.ILS.value);
        setDollarRate(res.data.data.ILS.value)
        setIsSucsses(true)
      }).catch(err => setIsSucsses(false))
  }, [])
  let [donations, setDonations] = useState([{
    id: 1, sum_of_donate: 9, full_name: "itty", dedication: "good luck"
    , date: new Date(2023, 11, 12)
  },
  { id: 2, sum_of_donate: 90, full_name: "gitty", dedication: "love you", date: new Date() }])
  const add_don = (new_don) => {
    let copy = [...donations, new_don]
    setDonations(copy)
  }
  const handleChange = (event) => {
    setCoin(event.target.value);
  };
  console.log("coin in app ; "+coin);

  return (
    <div className="App" id="container">
              <dollarContext.Provider value={{ coin: coin, dollarRate: dollarRate }}>
      <nav>
        <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_19282ee97e2e61dbd9b0f4a7e3b40baf/charidy.png" />
        <div>
        <input type="color" onChange={(e) => setColors(e.target.value)}/> 
        </div>
          {isSucsses == true ? <div>
            <FormControl sx={{ m: 2, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">מטבע</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="select"
                value={coin}
                label="coin"
                onChange={handleChange}>
                <MenuItem value={"shekel"}>₪</MenuItem>
                <MenuItem value={"dollar"}>$</MenuItem>
              </Select>
            </FormControl>
          </div> : <div>
            <FormControl sx={{ m: 2, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label"> סוג המטבע:</InputLabel>
              <Select
                disabled
                labelId="demo-simple-select-helper-label"
                id="select"
                value={coin}
                label="coin"
                onChange={handleChange}>
                <MenuItem value={"shekel"}>₪</MenuItem>
                <MenuItem value={"dollar"}>$</MenuItem>
              </Select>
            </FormControl>
          </div>
          }
      </nav>
      <HomePage donations={donations} colors={colors} />
      <Routes>
        <Route path='/Donations' element={<Donations donations={donations} setDonations={setDonations} colors={colors} />} />
        <Route path='/Form' element={<Form donations={donations} setDonations={setDonations} add_don={add_don} colors={colors} />} />
        {/* <Route path='*' element={<h1>not found!</h1>}/> */}
      </Routes>
      </dollarContext.Provider>
    </div >
  );
}

export default App;



