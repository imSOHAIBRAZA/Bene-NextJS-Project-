import React, {Component} from 'react';
import PageLayout from "../components/PageLayout";
import {Images} from "../Images/Image";

class AllProducts extends Component {
  render() {
    return (
      <PageLayout>
        <div className="container-fluid">
          <h3 className="main-heading">Discover the whole range of cbd products</h3>
          <div className="row">
            <div className="col-sm-4 col-12">
              <div className="product-item">
                <div className="product-img">
                  {/*<img src={Images.oil_img} className="img-fluid" />*/}
                </div>
                <div className="product-name">
                  <h5>CBD Massage Oil</h5>
                </div>
                <div className="product-quantity">
                  <h6>1000 mg</h6>
                </div>
                <div className="product-price">
                  <p>$59</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default AllProducts;