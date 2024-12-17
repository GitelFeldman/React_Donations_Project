import { useContext } from "react";
import { dollarContext } from "./dollarContext";
function convertToShekel(sum,coin,dollarRate) {
   if(coin=="dollar") 
       return Number(sum*dollarRate).toFixed(1);
    else
    return sum;
}
function convertFromShekel(sum,coin,dollarRate) {
    if(coin!="shekel")
        return Number(sum/dollarRate).toFixed(1);
    else
    return sum;
}
function convertToDollar(sum,coin,dollarRate) {
    if(coin=="dollar") 
        return Number(sum/dollarRate).toFixed(1);
     else
     return sum;
 }
export{convertFromShekel,convertToShekel,convertToDollar}