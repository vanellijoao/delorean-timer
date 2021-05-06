import React from 'react';

class TimeComponent extends React.Component {
  render() {
    const { id, value } = this.props;

    return (
      <div className={ id }>
        <p>{ id }</p>
        <div>{ value }</div>
      </div>
    )
  }
}

export default TimeComponent;