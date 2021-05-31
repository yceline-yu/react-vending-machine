import React from "react";
import { Link, Route } from "react-router-dom"
/** VendingMachine - shows page with potential snacks
 * 
 * 
 */
function VendingMachine(){
 return (
   <div>
     <Link exact to="/snack1">Snack1</Link>
     <Link exact to="/snack2">Snack2</Link>
     <Link exact to="/snack3">Snack3</Link>
   </div>
 )
}

export default VendingMachine;