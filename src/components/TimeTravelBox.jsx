import React from 'react';
import TimeFrame from './TimeFrame';

class TimeTravelBox extends React.Component {
  render() {
    return (
      <div className="box">
        <TimeFrame legend="Present Time"/>
        <TimeFrame legend="Destination Time"/>
        <TimeFrame legend="Waiting Time"/>
      </div>
    )
  }
}

export default TimeTravelBox;
