import { useContext, useState } from "react";
import { donations, setDonations, add_don } from './App'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './form.css';
import { dollarContext } from "./dollarContext";
import { convertToShekel } from "./Sumerize";
const Form = ({ donations, setDonations, add_don, colors }) => {
    console.log("form succees");
    const coinData = useContext(dollarContext);
    let [donate, setDonate] = useState({ id: 0, sum_of_donate: 0, full_name: "", dedication: "" })
    let [myErrors, setMyErrors] = useState({});
    const validate = () => {
        let err = {}
        if (donate.sum_of_donate <= 0)
            err.sum_of_donate = "זוהי לא תרומה"
        if (donate.full_name == "")
            err.full_name = " שדה חובה"
        return err;
    }
    const change = (e) => {
        let inputvalue = e.target.value
        let inputType = e.target.type
        let inputId = e.target.id
        if (inputType == "number")
            inputvalue = +inputvalue
        let copy = { ...donate, [inputId]: inputvalue }
        setDonate(copy)
    }
    function deleteForm(e) {
        document.getElementById("form").reset();
        console.log("form succees");

    }
    const sendForm = (e) => {
        e.preventDefault();
        let result = validate();
        if (Object.keys(result).length == 0) {
            let t = [...donations]
            const ids = t.map(object => { return object.id; });//👉️[1,2,3,4]
            const max = Math.max(...ids);
            console.log(max); // 👉️4
            donate.date = new Date();
            donate.id = max + 1;
            console.log((t[t.length - 1].id) + 1);
            console.log("dollar rate in form : " + coinData.dollarRate);
            donate.sum_of_donate = convertToShekel(donate.sum_of_donate, coinData.coin, coinData.dollarRate)
            console.log("dollar : " + donate.sum_of_donate);
            add_don(donate)
            deleteForm();
            donate = { id: 0, sum_of_donate: 0, full_name: "", dedication: "" };
            setMyErrors({});
            console.log("form succees");
        }
        else
            setMyErrors(result)
    }
    return (
        <>
            <form id="form" onSubmit={sendForm} style={{ display: "flex", flexDirection: 'column', alignItems: "center", fontSize: "20px", color: colors, margin: "30px" }}>
                <TextField
                    required
                    placeholder="סכום תרומה"
                    id="sum_of_donate"
                    label="required"
                    defaultValue=""
                    type="number"
                    name="sum_of_donate"
                    onBlur={change}
                    color={myErrors.sum_of_donate ? "error" : "info"}
                    focused
                    className={"input"}
                    helperText={myErrors.sum_of_donate || ""}
                    FormHelperTextProps={{
                        style: { color: "red" },
                    }}
                />
                <TextField
                    required
                    placeholder="שם"
                    id="full_name"
                    label="required"
                    defaultValue=""
                    type="text"
                    name="full_name"
                    onBlur={change}
                    className={"input"}
                    color={myErrors.fullName ? "error" : "info"}
                    focused
                    helperText={myErrors.full_name || ""}
                    FormHelperTextProps={{
                        style: { color: "red" },
                    }} />
                <TextField
                    type="text"
                    id="dedication"
                    label="הקדשה"
                    placeholder="לא שדה חובה"
                    variant="outlined"
                    className={"input"}
                    onBlur={change} />
                <Button  type="submit" variant="contained" endIcon={<SendIcon />} style={{color:"black"}}>לתרום
                </Button>
            </form>
        </>
    );
}

export default Form;


