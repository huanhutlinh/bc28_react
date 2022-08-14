//rcc
import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'

export default class ReactForm extends Component {

  state = {
    arrProduct: [
      {id:'1',name:'product 1',price:1000,img:'https://picsum.photos/50/50',description:'description 1',productType:'mobile'},
      {id:'2',name:'product 2',price:2000,img:'https://picsum.photos/50/50',description:'description 2',productType:'tablet'},
    ]
  }

  addProduct = (newProduct) => {
    console.log(newProduct);
    let arrProductUpdate = [...this.state.arrProduct, {...newProduct}]
    //setState
    this.setState({
      arrProduct:arrProductUpdate
    });
    this.luuStore();
  }

  delProduct = (idDel) => {
    console.log(idDel);
    let arrProductUpdate = this.state.arrProduct.filter(pro => pro.id !== idDel);
    //this.setState
    this.setState({
      arrProduct: arrProductUpdate
    },()=>{
      this.luuStore();
    })
  }

  layStore() {
    if(localStorage.getItem('arrProduct')) {
      let arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
      return arrProduct;
    }
    return [];
  }

  luuStore(){
    let value = JSON.stringify(this.state.arrProduct);
    localStorage.setItem('arrProduct',value);
  }
  static getDerivedStateFromProps(newProps,currentState){
    // console.log('getDerivedStateFromProps')
    // currentState.number = 2;
    if(localStorage.getItem('arrProduct')) {
      currentState.arrProduct  = JSON.parse(localStorage.getItem('arrProduct'));
      return currentState;
    }
 
    return null;
    // return currentState;
  }

  render() {
    return (
      <div className='container'>
          <h3>Product management</h3>
          <FormProduct addProduct={this.addProduct} />
          <TableProduct arrProduct={this.state.arrProduct} delProduct={this.delProduct} />
      </div>
    )
  }
  componentDidMount() {

    // //Hàm này sẽ thực sau khi nội dung được render
    // this.setState({
    //   arrProduct: this.layStore()
    // })
  }
}




// const phuongThuc = function () {

// }
// class Product { 
//   props1 = 1;
//   props2 = 2;
//   static phuongThuc () {
//     //Ví dụ phương thức này không sử dụng thuộc tính hoặc phương thức khác từ class
//   }

// }


// let prd = new Product();
// prd.phuongThuc()


// Product.phuongThuc();