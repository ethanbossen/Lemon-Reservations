import React from 'react';

const HeroLanding = () => {
    return (
        <div>
            <div className="heroLandingHeading">
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
            </div>
            <div className="heroLandingContainer">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis dignissimos,
                    distinctio eos
                    error et eveniet impedit laborum minima mollitia nam omnis placeat provident quam, quod reiciendis
                    rerum
                    saepe totam.
                </p>
                <button>Reserve Table</button>
            </div>
            <div>
                <img className="heroLandingImg" src="/icons_assets/bruchetta.svg" alt="Little Lemon Bruchetta"/>
            </div>
        </div>
    )
        ;
};

export default HeroLanding;