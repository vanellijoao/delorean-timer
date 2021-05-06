import React from 'react';
import Button from './Button';
import TimeComponent from './TimeComponent';

class PresentTime extends React.Component {
  render() {
    const { day, month, hour, min, sec, id } = this.props
    
    return (
      <div className="timeframe">
        <div className="date">
          <TimeComponent id='day' value={ day }/>
          <TimeComponent id='month' value={ month }/>
          <TimeComponent id='hour' value={ hour }/>
          <TimeComponent id='min' value={ min }/>
          { id === "destination-time" ? <Button/> : <TimeComponent id='sec' value={ sec }/>}
        </div>
        <div className="legend">
          <p>{ this.props.legend }</p>
        </div>
      </div>
    )
  }
}

export default PresentTime;
