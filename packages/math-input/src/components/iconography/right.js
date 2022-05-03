/**
 * A component that renders the RIGHT iconograpy in SVG.
 */
import React from "react";

const Arrow = require("./arrow.js");

const Right = () => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48">
            <Arrow transform="rotate(180 24 24)" />
        </svg>
    );
};

export default Right;
