//rcc
import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";
import axios from 'axios';


export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: "1",
        name: "product 1",
        price: 1000,
        img: "https://picsum.photos/50/50",
        description: "description 1",
        productType: "mobile",
      },
      {
        id: "2",
        name: "product 2",
        price: 2000,
        img: "https://picsum.photos/50/50",
        description: "description 2",
        productType: "tablet",
      },
    ],
    productEdit: {
      id: "",
      name: "",
      price: 0,
      img: "",
      description: "",
      productType: "",
    },
  };



  updateProduct = (prodUpdate) => {
    console.log(prodUpdate);
    let prod = this.state.arrProduct.find(p => p.id == prodUpdate.id);
    console.log('update',prod);
    if(prod) {
      prod.name = prodUpdate.name;
      prod.price = prodUpdate.price;
      prod.description = prodUpdate.description;
      prod.productType = prodUpdate.productType;
      prod.img = prodUpdate.img;
    }
    //set lại state
    this.setState({
      arrProduct: this.state.arrProduct
    })

  }

  editProduct = (prodClick) => {

    this.setState({
      productEdit:prodClick
    })

  }


  addProduct = (newProduct) => {
    console.log(newProduct);
    let arrProductUpdate = [...this.state.arrProduct, { ...newProduct }];
    //setState
    this.setState({
      arrProduct: arrProductUpdate,
    });
    this.luuStore();
  };

  delProduct = (idDel) => {
    console.log(idDel);
    let arrProductUpdate = this.state.arrProduct.filter(
      (pro) => pro.id !== idDel
    );
    //this.setState
    this.setState(
      {
        arrProduct: arrProductUpdate,
      },
      () => {
        this.luuStore();
      }
    );
  };

  layStore() {
    if (localStorage.getItem("arrProduct")) {
      let arrProduct = JSON.parse(localStorage.getItem("arrProduct"));
      return arrProduct;
    }
    return [];
  }

  luuStore() {
    let value = JSON.stringify(this.state.arrProduct);
    localStorage.setItem("arrProduct", value);
  }
  static getDerivedStateFromProps(newProps, currentState) {
    // console.log('getDerivedStateFromProps')
    // currentState.number = 2;
    // if (localStorage.getItem("arrProduct")) {
    //   currentState.arrProduct = JSON.parse(localStorage.getItem("arrProduct"));
    //   return currentState;
    // }

    return null;
    // return currentState;
  }

  render() {
    return (
      <div className="container">
        <h3>Product management</h3>
        <FormProduct
          addProduct={this.addProduct}
          productEdit={this.state.productEdit}
          updateProduct={this.updateProduct}
        />
        <TableProduct
          arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
          editProduct={this.editProduct}
        />
      </div>
    );
  }
  componentDidMount() {
    // //Hàm này sẽ thực sau khi nội dung được render
    // this.setState({
    //   arrProduct: this.layStore()
    // })

    let promise = axios({
      url:'https://svcy.myclass.vn/api/Product/GetAll',
      method: 'GET'
    });

    promise.then(result => {
      this.setState({
        arrProduct:result.data
      });
    })

    promise.catch(err => {
      console.log(err);
    })
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
