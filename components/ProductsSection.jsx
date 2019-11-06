import React from 'react';
import TabAllButton from "./TabAllButton";
import ProductList from './ProductsList';


function ProductsSection({ headingTitle }) {

    return (
        <div className="container-fluid box-layout" style={{ backgroundColor: '#FAF7F5' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="productsSection__heading">
                            {headingTitle}
                        </h1>
                    </div>

                    <div className="col-md-12">
                        <TabAllButton />
                    </div>

                    <div className="col-md-12">
                        <div className="row">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductsSection;


