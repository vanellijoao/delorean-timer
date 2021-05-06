import React from 'react';

class TimeFrame extends React.Component {
  render() {
    return (
      <div className="timeframe">
        <div className="date"></div>
        <div className="legend">
          <p>{ this.props.legend }</p>
        </div>
      </div>
    )
  }
}

export default TimeFrame;
