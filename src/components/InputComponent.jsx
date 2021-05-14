import React from 'react';

class InputComponent extends React.Component {
  render() {
    const { id, value, handleChange, name } = this.props;

    return (
      <div className={ id }>
        <p>{ id }</p>
        <input
          type="text"
          placeholder={ value }
          name={ name }
          onChange={ handleChange }
          maxLength={ 2 }
        />
      </div>
    )
  }
}

export default InputComponent;