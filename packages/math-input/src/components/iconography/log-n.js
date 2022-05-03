/**
 * An autogenerated component that renders the LOG_N iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
import PropTypes from "prop-types";
import React from "react";

class LogN extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
    };

    render() {
        return (
            <svg width="48" height="48" viewBox="0 0 48 48">
                <g fill="none" fillRule="evenodd">
                    <path fill="none" d="M0 0h48v48H0z" />
                    <path
                        d="M30 28.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM32 30h4v4h-4v-4zM12.776 29v-9.338h-1.778V29h1.778zm4.9.168c2.24 0 3.584-1.624 3.584-3.556 0-1.918-1.344-3.542-3.584-3.542-2.226 0-3.57 1.624-3.57 3.542 0 1.932 1.344 3.556 3.57 3.556zm0-1.582c-1.106 0-1.722-.91-1.722-1.974 0-1.05.616-1.96 1.722-1.96 1.106 0 1.736.91 1.736 1.96 0 1.064-.63 1.974-1.736 1.974zm7.672 4.158c1.666 0 3.654-.63 3.654-3.206v-6.3H27.21v.868c-.546-.686-1.274-1.036-2.086-1.036-1.708 0-2.982 1.232-2.982 3.444 0 2.254 1.288 3.444 2.982 3.444.826 0 1.554-.392 2.086-1.064v.686c0 1.33-1.008 1.708-1.862 1.708-.854 0-1.568-.238-2.114-.84l-.798 1.288c.854.742 1.75 1.008 2.912 1.008zm.336-4.368c-1.008 0-1.708-.7-1.708-1.862 0-1.162.7-1.862 1.708-1.862.588 0 1.232.322 1.526.77v2.184c-.294.434-.938.77-1.526.77z"
                        fill={this.props.color}
                    />
                </g>
            </svg>
        );
    }
}

export default LogN;
