import React from "react";
import { Link } from "react-router-dom";

/** Snack Three
 * 
 */
function SnackThree(){
  return(
    <div>Snack Three!
      <Link exact to="/">I want to go back</Link>
    </div>
  )
}

export default SnackThree;