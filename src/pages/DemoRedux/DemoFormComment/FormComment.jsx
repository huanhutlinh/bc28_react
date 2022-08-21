import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store } from '../../../redux/configStore';

 class FormComment extends Component {

  handleSubmit = (e) =>{
    e.preventDefault();
    //Gửi dữ liệu lên redux
    const action = {
      type:'HANDLE_SUBMIT',
      payload: this.props.commentInfo
    }
    //Sử dụng this.props.dispatch gửi action lên store
    this.props.dispatch(action);
  }
  handleChange = (e) => {
    const {id,value} = e.target;
    //Gửi dữ liệu lên redux
    const action = {
        type:'HANDLE_CHANGE',
        payload: {
            id:id,
            value:value
        }
    }
    this.props.dispatch(action);
  }
  render() {
    const {name,content} = this.props.commentInfo;
    // console.log('state',store.getState()) ;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
            <p>Name</p>
            <input id="name" className='form-control' value={name} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
            <p>Content</p>
            <input id="content" className='form-control' value={content} onChange={this.handleChange} />
        </div>
        <div className='form-group mt-2'>
            <button className='btn btn-success'>Comment</button>

            <button type='button' className='btn btn-success' onClick={()=>{
                const action = {
                  type:'UPDATE_COMMENT',
                }

                this.props.dispatch(action);

            }}>Update</button>
        </div>
      </form>
    )
  }
}
const mapStateToProps = (state) => ({
    commentInfo:state.commentReducer.commentInfo
})


export default connect(mapStateToProps)(FormComment)