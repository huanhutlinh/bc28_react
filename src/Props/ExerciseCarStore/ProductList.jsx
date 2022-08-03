import React, { Component } from 'react'
import ItemProduct from './ItemProduct';

export default class ProductList extends Component {

    renderProductItem = () => {
    //products = [{ id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 }, ...] 
        let {products,viewDetail} = this.props;
        return products.map((car,index)=>{
            return <div className='col-3' key={index}>
                <ItemProduct item={car} viewDetail={viewDetail} />
            </div>
        })

    }
    render() {
        return (
            <div>
                <h3>Product list</h3>
                <div className='row'>
                    {this.renderProductItem()}
                </div>

            </div>
        )
    }
}
