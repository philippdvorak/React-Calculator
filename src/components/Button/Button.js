import React from "react";

import { CalcButton } from "./Button.styles";

const Button = (props) => (
    <CalcButton onClick={props.onClick}>
        {props.value}
    </CalcButton>
);

export default Button;