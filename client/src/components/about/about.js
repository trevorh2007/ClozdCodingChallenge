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
                    <li>Currently not using react-router easily loses data on refresh for user/:id, data is transferred from home page to the user details page. Find a fix for this using hookrouter and either it's "history" or use localstorage for refresh data.</li>
                    <li>The route for user/:id doesn't take in account of the 0 index position, quick fix wouldn't take long (example: route 'user/1' is actually user 2)</li>
                </ul>
            </p>
        </div>

    )
}

export default About;