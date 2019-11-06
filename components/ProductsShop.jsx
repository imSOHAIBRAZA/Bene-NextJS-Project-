import React from 'react';
import { imagePack } from "../Components/Constants";


function ProductsShop({ headingTitle }) {

    return (
        <div className="container-fluid box-layout" style={{ backgroundColor: '#FAF7F5' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="productshop__heading">
                            {headingTitle}
                        </h1>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-8">
                        <p className="productshop__decription">
                            Give our bundles a try with our 60-day, money-back guarantee.
                        The perfect gift.
                        A great way to enjoy premium CBD at an incredible price. All bundles are 20% off.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="text-right">
                            <span className="text-right productshop__button" >
                                Shop all
                                </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={imagePack.shop1} />
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={imagePack.shop2} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductsShop;


