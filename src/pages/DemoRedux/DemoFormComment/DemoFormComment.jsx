//rcredux 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormComment from './FormComment'
import TableComment from './TableComment'

 class DemoFormComment extends Component {
  render() {
    return (
      <div className='container'>
        <TableComment />
        <FormComment />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(DemoFormComment)