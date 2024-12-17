import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function CoinSelect() {
    const [coin, setCoin] = React.useState('');
    const handleChange = (event) => {
        setCoin(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">coin</InputLabel>
                <Select 
                    labelId="demo-simple-select-helper-label"
                    id="select"
                    value={coin}
                    label="coin"
                    onChange={handleChange}>
                    <MenuItem  value={0}>שקל</MenuItem>
                    <MenuItem  value={1}>דולר</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
//איך אפשר לדעת בפורם מה הוליו שבחרתי פה????
// let value_of_coin = document.getElementById("select").value;
// console.log("vvv"+value_of_coin);
export { CoinSelect };