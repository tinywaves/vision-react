import React, { PureComponent } from 'react';

import { Decoration5 } from '@jiaminghi/data-view-react';
import TopBarStyles from './styles';

import { formatTime } from '../../utils';
import { VISION_CONTENT, WEEK } from '../../common';

export default class TopBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: VISION_CONTENT,
      formatTimeString: '',
      week: WEEK
    };
  }

  componentDidMount() {
    this.getTime();
  }

  getTime() {
    setInterval(() => {
      let year = formatTime(new Date(), 'yyyy-MM-dd');
      let day = formatTime(new Date(), 'HH: mm: ss');
      let week = this.state.week[new Date().getDay()];

      this.setState({
        formatTimeString: `${year} | ${day} ${week}`
      });
    }, 1000);
  }

  render() {
    return (
      <TopBarStyles>
        <div className="top-bar-text">
          <div className="duration">
            当前系统已经顺利运行 {this.props.duration}
          </div>
          <div className="title">{this.state.title}</div>
          <div className="time">{this.state.formatTimeString}</div>
        </div>
        <Decoration5
          style={{ width: '500px', height: '25px', margin: '0 auto' }}
        />
      </TopBarStyles>
    );
  }
}
