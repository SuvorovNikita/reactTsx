import React from "react";

type PropsType = {
    onClick?: () => void
}
const Button = (props: PropsType) => {
    function addClickName() {
        if (props.onClick) {
            props.onClick();
        }
    }
    return (
        <button onClick={addClickName}>Click</button>
    )
};
export default Button;