import React from "react";
import { Link } from "react-router-dom";

/** Snack One
 * 
 */
function SnackOne(){
  return(
    <div>Snack One!
      <Link to="/">I want to go back</Link>
    </div>
  )
}

export default SnackOne;