import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Burger extends Component {

  renderTopping = (id) => {
      const {burger} = this.props;
      let cheese = burger.find(item => item.id === id);
      //Số lượng 
      let {quantity} = cheese;
      const arrDivJSX = [];
      for(let i = 0; i < quantity; i ++ ){
        //Mỗi lần duyệt tạo ra 1 div đưa vào arr
        const divTopping = <div className={id} key={i}></div>;
        arrDivJSX.push(divTopping);
      }
      return arrDivJSX; // [<div>1</div>,<div>2</div>]
  }

  render() {
    return (
      <div className='container'>
        <div className='breadTop'></div>
        {this.renderTopping('cheese')}
        {this.renderTopping('beef')}
        {this.renderTopping('salad')}
        {/* <div className='cheese'></div> */}
        {/* <div className='beef'></div> */}
        {/* <div className='salad'></div> */}
        <div className='breadBottom'></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  burger:state.burgerReducer.burger
})


export default connect(mapStateToProps)(Burger)