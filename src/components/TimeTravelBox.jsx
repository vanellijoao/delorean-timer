import React from 'react';

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import PresentTime from './PresentTime';

const state = {
  day: format(new Date(), 'dd', {locale: ptBR,}),
  month: format(new Date(), 'MMM', {locale: ptBR,}),
  hour: format(new Date(), 'HH', {locale: ptBR,}),
  min: format(new Date(), 'mm', {locale: ptBR,}),
  sec: format(new Date(), 'ss', {locale: ptBR,})
}

class TimeTravelBox extends React.Component {
  constructor() {
    super();

    this.state = state
  }

  componentDidMount() {
    const ONE_MILISECOND = 1; // 1 second in miliseconds
    this.cronometerInterval = setInterval(() => {(
      this).setState({
        day: format(new Date(), 'dd', {locale: ptBR,}),
        month: format(new Date(), 'MMM', {locale: ptBR,}),
        hour: format(new Date(), 'HH', {locale: ptBR,}),
        min: format(new Date(), 'mm', {locale: ptBR,}),
        sec: format(new Date(), 'ss', {locale: ptBR,})
      });
    }, ONE_MILISECOND);
  }
  
  render() {
    const { day, month, hour, min, sec } = this.state

    return (
      <div className="box">
        <PresentTime 
          legend="Present Time"
          class="present-time"
          day={ day }
          month={ month }
          hour={ hour }
          min={ min }
          sec={ sec }
        />
        <PresentTime 
          legend="Destination Time"
          class="destination-time"
          day={ day }
          month={ month }
          hour={ hour }
          min={ min }
          sec={ sec }
        />
        <PresentTime 
          legend="Waiting Time"
          class="waiting-time"
          day={ day }
          month={ month }
          hour={ hour }
          min={ min }
          sec={ sec }
        />
      </div>
    )
  }
}

export default TimeTravelBox;
