//rcc
import React, { Component } from 'react'
// import '../index.css'
import style from './StyleWithJSX.module.css';

export default class StyleWithJSX extends Component {

    render() {
        return (
            <div className='container'>
                <h3>StyleWithJSX</h3>
                <p className='text-red'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur blanditiis laudantium iusto. Saepe natus suscipit asperiores doloremque! Quibusdam fuga earum maiores eius officiis corrupti eos expedita cumque, impedit facilis dicta.
                </p>
                <h3 className={`p-2 bg-dark text-light ${style['text-blue']}`}> hello frontend 28</h3>
                <hr />
                <div style={{color:'red',background:`url(https://picsum.photos/500/500)`,height:500}}> Hello cybersoft!!!</div>
            </div>
        )
    }
}
