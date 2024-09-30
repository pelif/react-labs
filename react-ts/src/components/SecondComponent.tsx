import React from "react";

interface Props {
    name: string, 
    age: number
}

const SecondComponent = (props: Props) => {
    const { name, age } = props;
    return (
        <div>
            <h1>My Second Component</h1>
            <h2>O nome dele é {props.name}</h2>
            <h3>A idade dele é {props.age}</h3>
        </div>
    );
}

export default SecondComponent;