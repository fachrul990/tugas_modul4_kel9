import React, { useState, useContext } from "react";
import {UserContext} from "../learn-useContext";
import logo from "../logo.svg";
import "./Counter.css";

export default function Counter() {
    const [showImage, setShowImage] = useState(true);
    const [count, setCount] = useState(0);
    const user = useContext(UserContext);
    const countUp = () => {
        setCount(count + 1);

    };
    const countDown = () => {
        setCount(count - 1);
    };
    const hideImage = () => {
        setShowImage(!showImage);
    };
    return (
        <div className="Main">
            <p className="Text">Counter with useState</p>
            <p>KELOMPOK 9</p>
            <ul>
                {user.map((el, idx) => (
                    <li key={idx}>{el}</li>
                ))}
            </ul>
            <div className="ViewImage">
                <div className="ViewImage1">
                    <img className="App-logo"
                        style={{
                            display: showImage === true ? "flex" :
                                "none"
                        }}
                        src={logo}
                        alt="logo" />
                </div>
                <button className="Button" onClick={hideImage}>
                    {showImage !== true ? "show" : "hide"}
                </button>
            </div>
            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={countDown}>
                        Down
                    </button>
                </div>
            </div>
            </div>
    );
}

