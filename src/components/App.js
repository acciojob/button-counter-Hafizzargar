
import React from "react";
import './../styles/App.css';

const App = () => {
  let [count,setcount]=useState(0);
  return (
    <div>
      <p>Button clicked {count} times</p>

      <button onclick={()=>{
        return setcount(count+1);
      }}>Click me</button>


      
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
