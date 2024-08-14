import React, { useState } from "react";

const Star = () => {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const arr = [1, 2, 3, 4, 5];

    const handle = (value) => {
        setSelectedNumber(value);
    };


    return (
        <>
            <h2>Hello star</h2>
            {arr.map((value, index) => {
                let color = '';
                if (value === selectedNumber) {
                    color = 'black';
                } else if (value < selectedNumber) {
                    color = 'red';
                } else {
                    color = 'blue';
                }
                return (
                    <span
                        key={index}
                        style={{ marginLeft: "20px", color: color, cursor: 'pointer' , width:"50px  "}}
                        onClick={() => handle(value)}
                    >
                        {value}
                    </span>
                );
            })}
        </>
    );
};

export default Star;
