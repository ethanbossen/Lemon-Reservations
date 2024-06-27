import React from 'react';


const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <h1 className="about__title">Little Lemon</h1>
                <h3 className="about__subtitle">Chicago</h3>
                <p className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque
                    consectetur delectus dolorem error ex id illum maiores molestias obcaecati perferendis, porro, quas
                    quasi qui quos ratione repellendus sit veniam?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa cupiditate, dignissimos eum
                    ipsa modi, officiis praesentium provident rem repellendus sit veniam? Aliquid commodi, dolores ex
                    facilis maxime molestias sapiente!</p>
            </div>
            <div className="aboutImage-Stack">
                <div className="image-stack-item image-stack-item-top">
                    <img src="/icons_assets/restaurant%20chef%20B.jpg" alt="Chef"/>
                </div>
                <div className="image-stack-item image-stack-item-bottom">
                    <img src="/icons_assets/restaurant.jpg" alt="restaurant"/>
                </div>

            </div>
        </div>
    );
};

export default About;