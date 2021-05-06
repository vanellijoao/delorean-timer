import React from 'react';
import PresentTime from './PresentTime';

class TimeTravelBox extends React.Component {
  render() {
    return (
      <div className="box">
        <PresentTime legend="Present Time"/>
        {/* <TimeFrame legend="Destination Time"/>
        <TimeFrame legend="Waiting Time"/> */}
      </div>
    )
  }
}

export default TimeTravelBox;
