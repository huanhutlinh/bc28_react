import React, { Component } from 'react'
import BaiTapChonXe from '../BaiTap/BaiTapChonXe'
import BaiTapTangGiamFontSize from '../BaiTap/BaiTapTangGiamFontSize'

export default class StateDemo extends Component {
    //state: là thuộc tính có sẵn của react class component, dùng để chứa các giá trị thay đổi trên giao diện. Khi state thay đổi thì giao diện sẽ tự render lại
    state = {
        login: false,
        stateA: 'a',
        stateB: 'b'
    }
    // login = false; // false: Chưa đăng nhập, true: đăng nhập

    renderLogin = () => {
        if (this.state.login) {
            return <div>
                <span className='text-light'>Hello cybersoft</span>
                <button className='btn btn-danger' onClick={() => {
                    this.setState({
                        login: false
                    })
                }}>Đăng xuất</button>
            </div>
        }
        return <button className='btn btn-outline-success' onClick={() => {
            //Gọi hàm để đăng nhập
            this.handleLogin();
        }}>Đăng nhập</button>
    }
    handleLogin = () => {
        // this.state.login = true; //Không được thay đổi state trực tiếp mà phải thông qua phương thức setState
        // console.log(this.state.login);
        // let newState = { login: true };
        /*
         + this.setState là phương thức có sẵn của react class component, làm thay đổi giá trị state cũ đồng thời render lại giao diện
         + setState là phương thức bất đồng bộ.
        */
        this.setState({
            login: true
        }, () => {
            //Hàm này sẽ tự gọi sau khi setState và render xong
            console.log(this.state);
        });


    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="visually-hidden">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className="d-flex my-2 my-lg-0 align-items-center">
                            {/* {this.login ? <span className='text-light'>Hello cybersoft</span> : <button className='btn btn-outline-success'>Đăng nhập</button>} */}
                            {this.renderLogin()}

                        </div>
                    </div>
                </nav>
                <hr />
                <h3 className='container'>Bài tập chọn xe</h3>
                <BaiTapChonXe />
                <hr />
                <BaiTapTangGiamFontSize />
            </>
        )
    }
}
