import React, { Component } from 'react'

export default class ProductCard extends Component {

    // abc = () => {
    //     this.props.item
    // }
    render() {
        //this.props: thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
        /*
           so sánh: state & props
           giống nhau: Đều là thuộc tính có sẵn của react class component dùng để binding dữ liệu ra giao diện.
           khác nhau: state có thể gán lại giá trị thông qua phương thức setState, props không thể gán lại giá trị (readonly) dùng để nhận giá trị từ component cha truyền vào.
           optional chaining: ? => nếu có thì làm không có giá trị thì bỏ qua
        */
        const { item } = this.props;
        // this.props.name = 'abc';
        return (
            <div className='card'>
                <img src={`https://i.pravatar.cc?u=${item?.age}`} alt='...' />
                <div className='card-body'>
                    <p>Name: {item?.name}</p>
                    <p>Age: {item?.age}</p>
                    <p>id: {this.props.item.id}</p>
                </div>
            </div>
        )
    }
}
