import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    const {deleteFn,index} = this.props
    // console.log(this.props.index);
    deleteFn(index)
  }
  render() {
    const { content, test} = this.props
    return (
      <li onClick={this.handleClick} >
        {test} - {content}
      </li>
    )
  }
}

TodoItem.propTypes = {
  test:PropTypes.string.isRequired,
  content:PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteFn:PropTypes.func,
  index:PropTypes.number
}
TodoItem.defaultProps = {
  test:'isTest'
}