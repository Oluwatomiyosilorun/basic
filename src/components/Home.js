import React from 'react';
import Logo from '../assets/images/Naomie.svg';
import Smile from '../assets/images/image_2.svg';
import Shopping from '../assets/images/image_1.svg';
import New from '../assets/images/Rectangle_1.svg';
import Emoji from '../assets/images/wink.png';

const Home = () => {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand logo" href="#">
                    <img src={Logo} alt="" />
                    <br/>
                    <p className="logo_talk"> Shopping Made social </p>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mt-3" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mt-2 mt-lg-0 w-100">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <button className="">
                                Sign Up
                            </button>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <div className="container p-0">
                <div className="new_experience d-flex mt-4">
                    <div className="col-lg-6">
                        <h4>A new experience in online shopping</h4>
                        <p>You never have to ask around anymore for reliable vendors, we have them all here</p>
                        <div className="text-center sign-up">
                            <button>Sign up</button>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img src={Smile} alt="" className="w-100"/>
                    </div>
                </div>

                <div className="whats_new d-flex mt-5">
                    <div className="col-lg-6">
                        <img src={New} alt="" className="w-100"/>
                    </div>

                    <div className="col-lg-6 whats_new_container">
                        <h4>What’s New?</h4>
                        <p>Find, follow and stay connected to your favourite vendor.Get notifications on new products,discounts and promos.</p>
                    </div>
                </div>
            </div>

            <div className="together">
                <h4 className="text-center">Group Buy-Buy Together,Save Together</h4>
                <div className="together_content d-flex">
                    <div className="col-lg-6">   
                        <img src={Shopping} alt="" className="w-100"/>
                    </div>

                    <div className="col-lg-6">
                        <p>You can unlock bigger discounts and rewards by sharing information about promotions to your friends and families. They can group buy together to achieve a lower price.</p>
                        <div className="text-center sign-up">
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="multi_vendor text-center">
                <div className="multi_vendor_content">
                    <p>Are you a vendor looking for ways to build a profitable business, build a community of buyers who are crazy about your brand?
                        <br/>
                        <span>Welcome to Naomie!</span>
                    </p>
                    <div className="text-center sign-up">
                        <button>Get Started</button>
                    </div>
                </div>
            </div>

            <div className="what_you_get text-center">
                <h4 className="text-center">What you Ordered VS  What you got</h4>
                <p>Never! never!! never!!!</p>
                <div className="text-left w-75 m-auto">
                    <li>With our secured escrow solution, your payment is held until you confirm what you ordered is what you got</li>
                    <li>Our social features like chat, follow, group chat enable you to build initimacy with your customers</li>
                    <li>You will never have to deal with fake payment because of our  wallet and escrow features</li>
                </div>
                <div className="text-center sign-up">
                    <p>Get In To Learn More</p>
                    <button>Get Started</button>
                </div>
            </div>

            <div className="rank d-flex">
                <div className="col-lg-6">
                    <img src={Emoji} alt="" className="w-100"/>
                </div>

                <div className="col-lg-6">
                    <h4>Grow your rank!</h4>
                    <div className="text-center">
                        <p>Grow your rank and unlock exciting and rewarding shopping features that will blow your mind</p>
                        <p>Get notified when we go live</p>

                        <div className="text-center sign-up">
                            <button>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="d-flex">
                <div>
                    <h5>Quick Links</h5>
                    <p>About</p>
                    <p>Service</p>
                </div>

                <div>
                    <h5>Contact Us</h5>
                    <p>+234 (0) 8185218818</p>
                </div>

                <div>
                    <h5>Office Address</h5>
                    <p>Lagos State/Uyo<br/>Nigeria</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;