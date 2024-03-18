import React, { useRef, useEffect } from "react";
import { Typed } from 'react-typed';

const Header = () => {
    const typedRef = useRef(null); // Create a ref for the Typed instance

    useEffect(() => {
        if (typedRef.current) {
            const options = {
                strings: ['Web Design', 'Web Development', 'Programmer', 'Google Ads', 'Figma designer'],
                typeSpeed: 40,
                backSpeed: 60,
                loop: true
            };

            const typed = new Typed(typedRef.current, options); // Initialize Typed instance
            return () => {
                typed.destroy(); // Cleanup Typed instance on component unmount
            };
        }
    }, []);

    return (
        <div className="header-wraper">
            <div className="main-info">
                <div className="typed-container">
                    <h1>Web Development</h1>
                    <span ref={typedRef}></span> {/* Use ref for Typed instance */}
                </div>
                <a href='#' className="btn-main-offer">contact me</a>
            </div>
        </div>
    );
};

export default Header;


















{/*import React from "react";
import ReactTyped from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>web development and websites promotios</h1>
                <ReactTyped
                    className='typed-text'
                    strings={['Web Design', 'Web Development', 'Programmer', 'Google Ads', 'Figma designer']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

            </div>
        </div>
    )
}

export default Header;*/}