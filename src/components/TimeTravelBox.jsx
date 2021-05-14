import React from 'react';

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import Timeframe from './Timeframe';

const state = {
  actualDate: {
    day: format(new Date(), 'dd', {locale: ptBR,}),
    month: format(new Date(), 'MMM', {locale: ptBR,}),
    hour: format(new Date(), 'HH', {locale: ptBR,}),
    min: format(new Date(), 'mm', {locale: ptBR,}),
    sec: format(new Date(), 'ss', {locale: ptBR,}),
  },
  destination: {
    destHour: "00",
    destMin: "00",
  },
  countdown: {
    countdownHour: "00",
    countdownMin: "00",
    countdownSec: "00",
  }
}

class TimeTravelBox extends React.Component {
  constructor() {
    super();

    this.time = this.time.bind(this);
    this.countdown = this.countdown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateTime = this.updateTime.bind(this);

    this.state = state
  }

  time() {
    this.setState({
      actualDate: {
        day: format(new Date(), 'dd', {locale: ptBR,}),
        month: format(new Date(), 'MMM', {locale: ptBR,}),
        hour: format(new Date(), 'HH', {locale: ptBR,}),
        min: format(new Date(), 'mm', {locale: ptBR,}),
        sec: format(new Date(), 'ss', {locale: ptBR,})
      }
    })
  }

  countdown() {
    const { destMin, min, destHour, hour, sec } = this.state;

    let countdownSec = 60 - sec;
    let countdownMin = destMin - min;
    let countdownHour = destHour - hour;

    if(countdownSec < 10 ) {
      countdownSec = "0"+countdownSec;
    }

    if(countdownSec === 60 ) {
      countdownSec = "00"
    }
    
    if (countdownMin < 0) {
      countdownMin = countdownMin + 60;
      countdownHour = countdownHour - 1
    }
    
    if(countdownMin < 10 ) {
      countdownMin = "0"+countdownMin;
    }

    if(countdownHour < 10 ) {
      countdownHour = "0"+countdownHour;
    }
    
    this.setState({
      countdown: {
        countdownSec,
        countdownMin,
        countdownHour
      }
    })
  }

  handleChange(event) {
    const { target: { name, value } } = event

    this.setState({
      [name]: value,
    })

  }

  updateTime() {
    const ONE_MILISECOND = 1;
    setInterval(() => {
      this.time()
    }, ONE_MILISECOND);
  }

  componentDidMount() {
    this.updateTime()
  }
  
  render() {
    const {
      actualDate: {
        day, month, hour, min, sec,
      },
      destination: {
        destHour, destMin,
      },
      countdown: {
        countdownHour, countdownMin, countdownSec
      }
    } = this.state

    return (
      <div className="box">
        <Timeframe 
          legend="Present Time"
          id="present-time"
          day={ day }
          month={ month }
          hour={ hour }
          min={ min }
          sec={ sec }
        />
        <Timeframe 
          legend="Destination Time"
          id="destination-time"
          day={ day }
          month={ month }
          hour={ hour }
          min={ min }
          destHour={ destHour }
          destMin={ destMin }
          handleChange={ this.handleChange }
        />
        <Timeframe
          legend="Countdown"
          id="countdown"
          day={ day }
          month={ month }
          hour={ countdownHour }
          min={ countdownMin }
          sec={ countdownSec }
        />
      </div>
    )
  }
}

export default TimeTravelBox;
