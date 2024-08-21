
import React , {useState} from "react";
import './../styles/App.css';


const App = () => {
 const [count, setCount] = useState(0);

    // Event handler to increment the counter
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
 
 
}

export default App
