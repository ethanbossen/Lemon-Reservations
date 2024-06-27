import React from 'react';

const Home = () => {
    return (
        <div className="HomePage">
            <div className="homeHeader">
                <h4>Specials</h4>
                <button>Order Now</button>
            </div>
            <div className="homeContainer">
                <article><img src="/icons_assets/greek%20salad.jpg" alt="greek salad"/>
                    <div className="priceName">
                        <p>Greek Salad</p>
                        <p>11.25</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nemo omnis totam.
                        Accusantium architecto consequatur delectus doloribus.</p>
                </article>
                <article><img src="/icons_assets/greek%20salad.jpg" alt="greek salad"/>
                    <div className="priceName">
                        <p>Greek Salad</p>
                        <p>11.25</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nemo omnis totam.
                        Accusantium architecto consequatur delectus doloribus.</p>
                </article>
                <article><img src="/icons_assets/greek%20salad.jpg" alt="greek salad"/>
                    <div className="priceName">
                        <p>Greek Salad</p>
                        <p>11.25</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nemo omnis totam.
                        Accusantium architecto consequatur delectus doloribus.</p>
                </article>
            </div>

        </div>

    );
};

export default Home;