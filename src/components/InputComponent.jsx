import React from 'react';

class InputComponent extends React.Component {
  render() {
    const { id, value } = this.props;

    return (
      <div className={ id }>
        <p>{ id }</p>
        <input type="text" placeholder={ value }/>
      </div>
    )
  }
}

export default InputComponent;