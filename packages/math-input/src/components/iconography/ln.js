// @flow
/**
 * An autogenerated component that renders the LN iconograpy in SVG.
 *
 * Generated with: convert.js
 */
import * as React from "react";

const Ln = (props: {|color: string|}): React.Node => {
    return (
        <svg width="48" height="48">
            <defs>
                <path id="a" d="M0 0h600v956H0z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path fill="none" d="M0 0h48v48H0z" />
                <path
                    d="M20.836 29v-9.338h-1.778V29h1.778Zm8.106 0v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882H22.6V29h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V29h1.778Z"
                    fill={props.color}
                />
                <g transform="translate(-434 -790)">
                    <mask id="b" fill="#fff">
                        <use xlinkhref="#a" />
                    </mask>
                    <use fill="#FAFAFA" xlink:href="#a" />
                    <g mask="url(#b)">
                        <path fill="none" d="M434 790h48v48h-48z" />
                        <path
                            d="M454.836 819v-9.338h-1.778V819h1.778Zm8.106 0v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882H456.6V819h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V819h1.778Z"
                            fill="#3B3E40"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Ln;
