
import React, { Component, Fragment } from 'react';
import  {Provider}  from 'react-redux';
import '../styles/style.scss';
import store from '../store';
import Header from '../Components/Header';
import ProductsSection from '../Components/ProductsSection'
import ProductsDetails from '../Components/ProductsDetails'
import ProductsShop from '../Components/ProductsShop'
import 'bootstrap/scss/bootstrap.scss';
// import 'bootstrap/dist/css/bootstrap-theme.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { business: false };
  }


  render() {

    return (
      <Provider store={store}>
      <Fragment>
        <Header />
        <ProductsSection headingTitle="Discover the products line"/>
        <ProductsDetails title="bene" subTitle="organically grown hemp extract"/>
        <ProductsShop headingTitle="Bundles of awesomeness!"/>

       </Fragment>
       </Provider>
    );
  }
}


export default Home;








