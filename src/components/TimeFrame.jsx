import React from 'react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

const state = {
  day: format(new Date(), 'ss', {locale: ptBR,}),
  month: format(new Date(), 'ss', {locale: ptBR,}),
  hour: format(new Date(), 'ss', {locale: ptBR,}),
  minute: format(new Date(), 'ss', {locale: ptBR,}),
  second: format(new Date(), 'ss', {locale: ptBR,})
}

class TimeFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = state
  }

  // componentDidMount() {
  //   const ONE_SECOND = 1000; // 1 second in miliseconds
  //   this.cronometerInterval = setInterval(() => {
  //     console.log('interval rodando');(
  //     this).setState({
  //       second: format(new Date(), 'ss', {locale: ptBR,})
  //     });
  //   }, ONE_SECOND);
  // }
  
  render() {
    const { day, month, hour, minute, second } = this.state
    
    return (
      <div className="timeframe">
        <div className="date">
          <div className="day">
            <p>day</p>
            <div>{ day }</div>
          </div>
          <div className="month">
            <p>month</p>
            <div>{ month }</div>
          </div>
          <div className="hour">
            <p>hour</p>
            <div>{ hour }</div>
          </div>
          <div className="min">
            <p>min</p>
            <div>{ minute }</div>
          </div>
          <div className="sec">
            <p>sec</p>
            <div>{ second }</div>
          </div>
          <button>oi</button>
        </div>
        <div className="legend">
          <p>{ this.props.legend }</p>
        </div>
      </div>
    )
  }
}

export default TimeFrame;
