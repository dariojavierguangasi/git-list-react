import React from "react";


function Repo({name, description}) {
    return (
        <div style={{
            borderBottom: '10px solid red'
        }} className="Repo">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Repo;