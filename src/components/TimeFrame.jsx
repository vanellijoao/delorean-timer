import React from 'react';

class TimeFrame extends React.Component {
  render() {
    return (
      <div className="timeframe">
        <div className="date">
          <div className="month">
            <p>month</p>
            <div></div>
          </div>
          <div className="day">
            <p>day</p>
            <div></div>
          </div>
          <div className="am-pm">
            <p>am</p>
            <input type="radio" name="" id=""/>
            <p>pm</p>
            <input type="radio" name="" id=""/>
          </div>
          <div className="hour">
            <p>hour</p>
            <div></div>
          </div>
          <div className="min">
            <p>min</p>
            <div></div>
          </div>
          <div className="sec">
            <p>sec</p>
            <div></div>
          </div>
        </div>
        <div className="legend">
          <p>{ this.props.legend }</p>
        </div>
      </div>
    )
  }
}

export default TimeFrame;
