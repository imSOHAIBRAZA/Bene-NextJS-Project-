import React from 'react';
import { imagePack } from "../Components/Constants";


function ProductsDetails({ title, subTitle }) {

    return (
        <div className="container-fluid box-layout">
            <div className="container">
                <div className="row" >
                    <div className="col-md-4 ">
                        <h1 className="productShop__title">
                            {title}
                        </h1>
                    </div>
                    <div className="col-md-8" >
                        <h2 className="productShop__subtitle">{subTitle}</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-5">
                        <p>
                            In our own quest to enhance total balance and reduce stress,
                             we set out to understand, what is CBD.
                             We met manufacturers from across the world. We spoke with doctors.
                          </p>
                        <span className="productShop__button">
                            READ MORE
                        </span>

                    </div>
                    <div className="col-md-7" >
                        <img className="img-fluid" src={imagePack.detailsimage} />
                    </div>
                </div>


            </div>
        </div>
    )
};

export default ProductsDetails;


