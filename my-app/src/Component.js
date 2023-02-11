import { useState } from "react";

const Mycomponent = function (props) {
  const [state, setState] = useState(0)
  return <div onClick = {function (event) {
    setState(function (prew) {
      return prew + 2;
    });
  }}>{props.text}{props.children}{ state}</div>
}
export default Mycomponent;

// string initial reloaded
// event.target.innerHtml


// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }