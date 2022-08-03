import React, { Component } from 'react'

export default class ItemProduct extends Component {
  render() {
    let {item,viewDetail} = this.props;
    return (
      <div className='card'>
        <img src={item.img} alt="..." className='w-100' />
        <div className='card-body'>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className='btn btn-success' onClick={()=>{
                viewDetail(item);
            }} data-bs-toggle="modal" data-bs-target="#modelId">Detail</button>
        </div>
      </div>
    )
  }
}
