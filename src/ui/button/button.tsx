import React from "react";

type PropsType = {
    onClick: () => void
}
const Button = (props: PropsType) => {
    let {onClick} = props;
    return (
        <button onClick={onClick}>Click</button>
    )
};
export default Button;