import React from 'react';

const About = () => {
    return(
        <div className="container">
            <p>
                Cool little application built as part of a coding challenge for Clozd.
            </p>
            <p>
                Features:
                <ul>
                    <li>
                        NodeJS backend with ReactJS frontend
                    </li>
                    <li>
                        Randomuser.me API integration
                    </li>
                    <li>
                        Infinite scroll on home page to obtain mentioned API data
                    </li>
                    <li>
                        Use of 'hookrouter' for react routing purposes (lightweight alternative to react-router)
                    </li>
                    <li>
                        React-bootstrap for quick styles
                    </li>
                </ul>
            </p>
            <p>
                Fun TODO's:
                <ul>
                    <li>Add history to 'hookrouter' and infinite scroll scroll position for better UX when using back buttons from user details page </li>
                    <li>Unit tests, front/back end</li>
                </ul>
            </p>
        </div>

    )
}

export default About;