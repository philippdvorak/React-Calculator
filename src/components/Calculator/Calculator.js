import React from "react";
import {useState} from "react";

import {Grid, Buttons} from "./Calculator.styles";

import Head from "../Head/Head";
import Button from "../Button/Button";

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [math, setMath] = useState("");
    const [numberOne, setNumberOne] = useState(0);

    const numbers = [
        "<", "", "C", "AC",
        "7", "8", "9", "*",
        "4", "5", "6", "/",
        "1", "2", "3", "+",
        ".", "0", "=", "-"
    ];

    function calc() {
        let erg = 0;
        switch (math) {
            case "+":
                erg = parseInt(numberOne, 10) + parseInt(currentValue, 10);
                break;
            case "-":
                erg = numberOne - currentValue;
                break;
            case "/":
                erg = numberOne / currentValue
                break;
            case "*":
                erg = numberOne * currentValue;
                break;
            case "√":
                erg = Math.sqrt(currentValue);
                break;
            case "x²":
                erg = Math.pow(currentValue, 2);
                break;
            default:
                break;
        }

        return erg;
    }

    function renderButtons(i) {
        switch (i) {
            case "+":
            case "-":
            case "/":
            case "*":
                return <Button value={i} key={i} onClick={
                    () => {
                        if (math === "") {
                            setMath(i)
                            setNumberOne(currentValue);
                            setCurrentValue(0);
                        } else {
                            const erg = calc();
                            setNumberOne(erg);
                            setCurrentValue(erg);
                        }
                    }
                }/>
            case "<":
                return <Button value={i} key={i} onClick={
                    () => {
                        setCurrentValue(currentValue.substring(0, currentValue.length-1));
                    }
                }/>
            case "=":
                return <Button value={i} key={i} onClick={
                    () => {
                        if (numberOne !== 0 && currentValue !== 0 && math !== "") {
                            const erg = calc();

                            setNumberOne(erg);
                            setCurrentValue(erg);
                            setMath("");
                        }
                    }
                }/>
            case "AC":
                return <Button value={i} key={i} onClick={
                    () => {
                        setMath("");
                        setNumberOne(0);
                        setCurrentValue(0);
                    }
                }/>
            case "C":
                return <Button value={i} key={i} onClick={
                    () => {
                        setCurrentValue(0);
                    }
                }/>
            default:
                return <Button value={i} key={i} onClick={
                    () => {
                        setCurrentValue(currentValue === 0 ? "" + i : currentValue + i);
                    }
                }/>
        }
    }

    return (
        <Grid>
            <Head value={currentValue}/>
            <Buttons>
                {
                    numbers.map((value) => {
                        return renderButtons(value);
                    })
                }
            </Buttons>
        </Grid>
    );
}

export default Calculator;