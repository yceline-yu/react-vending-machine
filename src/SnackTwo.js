import React from "react";
import { Link } from "react-router-dom";
/** Snack Two
 * 
 */
function SnackTwo(){
  return(
    <div>Snack Two!
      <Link exact to="/">I want to go back</Link>
    </div>
  )
}

export default SnackTwo;