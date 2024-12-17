import { useState, useEffect, useMemo, useContext } from "react";
import Donate from "./Donate";
import './donations.css'
import { dollarContext } from "./dollarContext";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Donations = ({ donations, colors }) => {
  console.log("donations succees");

  let coin = useContext(dollarContext);
  let [sortBy, setSortBy] = useState("")
  let [searchTerm, setSearchTerm] = useState("")
  let filtered = useMemo(() => {
    return donations.filter(item => item.dedication.includes(searchTerm) || item.full_name.includes(searchTerm)).sort((a, b) => {
      if (sortBy == "old")
        return a.date - b.date;
      if (sortBy == "new")
        return b.date - a.date;
      if (sortBy == "sum")
        return b.sum_of_donate - a.sum_of_donate;
      return 0;
    })

  },
    [searchTerm, sortBy]);
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  console.log("coin in donations; "+coin.coin);  return (<>
    <div id="container" style={{ color: colors }}>
      <div className="inputs" >
        <Box sx={{ minWidth: 50 }} id="selectButton">
          <FormControl fullWidth style={{width:100}}>
            <InputLabel id="demo-simple-select-label">מיון לפי</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
              label="מיון לפי"
              onChange={handleChange}
              style={{width:100}}
            >
              <MenuItem value={"old"} style={{width:100}}>ישן</MenuItem>
              <MenuItem value={"new"}style={{width:100}}>חדש</MenuItem>
              <MenuItem value={"sum"}style={{width:100}}>סכום</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="סינון לפי שם" variant="outlined" onChange={(e) => setSearchTerm(e.target.value)} style={{width:200}}/>
          <TextField id="outlined-basic" label="סינון לפי הקדשה" variant="outlined" onChange={(e) => setSearchTerm(e.target.value)} style={{width:200}}/>
        </Box>
        </div>
      <ul id="allDonations">
        {filtered.map((item) => { return <Donate don={item} colors={colors} style={{ color: colors }} /> })}
      </ul>
    </div>
  </>);
}

export default Donations;


