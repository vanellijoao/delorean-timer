import React from 'react';

class InputComponent extends React.Component {
  render() {
    const { id, value, handleChange, name } = this.props;

    let min = 0;
    let max = 59;

    if(id === "hour") {
      min = value
      max = 23
    }

    return (
      <div className={ id }>
        <p>{ id }</p>
        <input
          type="number"
          placeholder={ value }
          name={ name }
          onChange={ handleChange }
          min={ min }
          max={ max }
        />
      </div>
    )
  }
}

export default InputComponent;