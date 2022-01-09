import './Footer.css';
import React from "react";

const iframeStyle = {
    height: '100%',
    width: '100%'
};

const Footer = () => {
    return (
        <div className="Footer">
            <iframe
                src="https://explorer.functionx.io/fxcore/validator/fxvaloper1337eaaxxqd7l3jw6hwsrh0rvcjgfzgwqdtfq8x"
                style={iframeStyle}
                title="EA's Validator Details"
            />
        </div>
    );
};
export default Footer;
