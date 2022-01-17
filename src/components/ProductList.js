import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';

class ProductList extends Component {
    // State disini untuk menampung data" yang akan digunakan di component ini
    state={
        products:[]
    }

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title className="our" title="products"/>
                        <div className="row"></div>
                    </div>
                </div>
            </React.Fragment>

            // <div>
            //     <Product />
            // </div>
        );
    }
}

export default ProductList;