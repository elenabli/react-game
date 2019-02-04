import React, { Component } from 'react';
import Column from '../column';
import './table.css';

class Table extends Component {
  renderColumn = (el, i) => {
    return <Column data = {el}
    onClickColumn={() => this.props.onClickColumn(i)} />
  }
      
  render() {
    return <div className='table'>
      {this.props.field.map(this.renderColumn)}
    
    </div>
  };
}

export default Table;