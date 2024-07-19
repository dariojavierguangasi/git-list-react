import { useState } from "react";

console.log(`User.js`);

function User({name, avatar}) {

    const [calculateName, setCalculateName] = useState(name);
    const [count, setCount] = useState(0);

    function onClick() {
        setCalculateName(`Javier`);
        setCount(count + 1);
        console.log(`Hello, my name is ${calculateName}`);
    }
    return (
        <div style={{
            borderBottom: '10px solid green'
        }} className="User" onClick={onClick}>
            <img src={avatar} title={calculateName} alt=""/>
            <p>{calculateName} hemos dado click en new name por {count} veces</p>
        </div>
    );
}

export default User;