import React, { Component } from 'react';
import Cel from '../cel';
import './column.css';

class Column extends Component {

  renderCel(el) {
    return <Cel user={el} />
  }
      
  render() {
    return <div className='column' onClick = {this.props.onClickColumn}>
    {this.props.data.map(this.renderCel)}
      </div>
  };
}

export default Column;


