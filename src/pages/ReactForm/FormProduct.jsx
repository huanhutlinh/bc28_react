import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: "",
      productType: "mobile",
      description: "",
      img: "",
    },
    error: {
      id: "",
      name: "",
      price: "",
      description: "",
      img: "",
    },
  };

  handleChange = (event) => {
    let { value, id } = event.target;
    let dataType = event.target.getAttribute("data-type");
    // debugger;
    //Xử lý productInfo
    let newValue = this.state.productInfo;
    newValue[id] = value;

    //Xử lý error
    let newError = this.state.error;
    let messError = "";
    if (value.trim() === "") {
      messError = id + " không được bỏ trống !";
    } else {
      if (dataType == "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messError = id + " phải là số !";
        }
      }
    }
    newError[id] = messError;

    //setState
    this.setState(
      {
        productInfo: newValue,
        error: newError,
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    //Chặn sự kiện reload của browser
    event.preventDefault();
    // console.log(this.state);

    //khi người dùng bấm nút submit => gửi dữ liệu người dùng nhập từ state => ra hàm addproduct
    this.props.addProduct(this.state.productInfo);
  };

  //Can thiệp vào quá trình render props của updating
  static getDerivedStateFromProps(newProps, currentState) {
    console.log(currentState);
    //Khi bấm nút chỉnh sửa
      currentState.productInfo = newProps.productEdit;
      return currentState ;
  }

  // componentWillReceiveProps(newProps) {
  //   //Chỉ chạy khi props thay đổi
  //   this.setState({
  //     productInfo:newProps.productEdit
  //   })
  // }

  render() {
    let { id, name, description, img, price, productType } =
      this.state.productInfo;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-warning">Create product</div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>id</p>
              <input
                value={id}
                className="form-control"
                id="id"
                name="id"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.id}</p>
            </div>
            <div className="form-group">
              <p>name</p>
              <input
                value={name}
                className="form-control"
                id="name"
                name="name"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.name}</p>
            </div>
            <div className="form-group">
              <p>price</p>
              <input
                value={price}
                data-type="number"
                className="form-control"
                id="price"
                name="price"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.error.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>img</p>
              <input
                value={img}
                className="form-control"
                id="img"
                name="img"
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.error.img}</p>
            </div>
            <div className="form-group">
              <p>product type</p>
              <select
                value={productType}
                id="productType"
                name="productType"
                className="form-control"
                onInput={this.handleChange}
              >
                <option value="mobile">mobile</option>
                <option value="tablet">tablet</option>
                <option value="laptop">laptop</option>
              </select>
            </div>
            <div className="form-group">
              <p>description</p>
              <textarea
                value={description}
                className="form-control"
                id="description"
                name="description"
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.error.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2">Create</button>
          <button type="button" className="btn btn-primary" onClick={()=>{
            this.props.updateProduct({...this.state.productInfo});
          }}>
            Update
          </button>
        </div>
      </form>
    );
  }
}
