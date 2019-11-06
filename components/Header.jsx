import React from 'react';
import { imagePack } from "../Components/Constants";
import NavBar from "./NavBar"

function Header({ children }) {
    return (
       
        <div className="box-layout" style={{backgroundImage: `url(${imagePack.bannerBg})`}}>
            <NavBar />

            <div class="container">
                <div class="row ">
                    <div class="col-sm-12 col-md-5 header__content">
                        <p className="text-right header__title">
                            <span style={{ fontSize: '120px' }}>bene</span>
                            <span style={{ fontSize: '115px' }}>fits</span><br />
                            <span style={{ fontSize: '93px' }}>your life</span>
                        </p>
                        <p className="header__description">
                            In our own quest to enhance total balance and reduce stress,
                             we set out to understand, what is CBD.
                        </p>

                        <div className="row header__button" >
                            <div className="text-right">
                                <span className="text-right" >
                                    Shop all products
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;


