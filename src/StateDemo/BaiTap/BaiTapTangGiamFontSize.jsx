import React, { Component } from 'react'

export default class BaiTapTangGiamFontSize extends Component {

    state = {
        fSize: 25 // default 16 px
    }

  render() {
    return (
      <div className='container'>
         <h3>Bài tập tăng giảm fontSize</h3>
         {/*                        16      + px => 16 */}
         <p style={{fontSize: this.state.fSize + 'px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam soluta sunt voluptates, maxime numquam excepturi? Modi sit perspiciatis inventore fugiat eaque sapiente distinctio veniam nam ab officia, perferendis cumque? Laudantium.</p>
         <button className='btn btn-primary mx-2' onClick={()=>{
            this.setState({
                fSize: this.state.fSize + 5
            })
         }}>+</button>
         <button className='btn btn-primary mx-2' onClick={()=>{
            this.setState({
                fSize: this.state.fSize - 5
            })
         }}>-</button>
      </div>
    )
  }
}
