import React from 'react';
import TimeComponent from './TimeComponent';

class PresentTime extends React.Component {
  render() {
    const { day, month, hour, min, sec } = this.props
    
    return (
      <div className="timeframe">
        <div className="date">
          <TimeComponent id='day' value={ day }/>
          <TimeComponent id='month' value={ month }/>
          <TimeComponent id='hour' value={ hour }/>
          <TimeComponent id='min' value={ min }/>
          <TimeComponent id='sec' value={ sec }/>
        </div>
        <div className="legend">
          <p>{ this.props.legend }</p>
        </div>
      </div>
    )
  }
}

export default PresentTime;
