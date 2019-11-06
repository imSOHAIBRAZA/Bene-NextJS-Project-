import React, { Fragment } from 'react';



const ProductListItem = ({ imgSrc }) => (
    <Fragment>
        <div className="col-md-4">
            <img className="img-fluid" src={imgSrc} />
        </div>
    </Fragment>
);

export default ProductListItem;



