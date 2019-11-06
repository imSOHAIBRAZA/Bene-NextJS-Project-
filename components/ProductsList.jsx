import React, { Fragment, Component } from 'react';
import ProductListItem from './ProductListItem';
import { connect } from "react-redux";
import { getProducts } from '../store/action/action'


class ProductList extends Component {

    state = {
        productsList: null,
        error: undefined,
        isLoading: undefined
    }

    componentDidMount() {
        this.props.getProducts();
    }

    static getDerivedStateFromProps(props, state) {
        const { productsList, error } = props.AllProductList;
        return { productsList }
    };

    render() {

        const { productsList, error } = this.props.AllProductList;

        return (
            <Fragment>
                {productsList ? productsList.map(e => <ProductListItem imgSrc={e.imgSrc} />) : <p>No Product</p>}
            </Fragment>
        )
    }
}


const mapStateToProps = ({ ...state }) => ({
    AllProductList: state.AllProducts
});

export default connect(mapStateToProps, { getProducts })(ProductList);

