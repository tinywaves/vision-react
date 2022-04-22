import React, { PureComponent, createRef } from 'react';
import * as echarts from 'echarts';

export default class BasicChart extends PureComponent {
  constructor(props) {
    super(props);
    // Get dom element.
    this.chartRef = createRef();
    this.chart = null;
  }

  async componentDidMount() {
    // Init chart.
    await this.initChart(this.chartRef);
    // Inject options passed by props.
    this.setOption(this.props.option);
    // Listen to the screen zoom and redraw the chart.
    window.addEventListener('resize', this.resize, 100);
  }

  componentDidUpdate() {
    // Re-render components when updating component data.
    this.setOption(this.props.option);
  }

  componentWillUnmount() {
    // Component uninstallation diagram before uninstallation.
    this.dispose();
  }

  render() {
    return (
      <div ref={this.chartRef} style={{ width: '100%', height: '100%' }} />
    );
  }

  initChart = (chartRef) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.chart = echarts.init(chartRef.current, 'dark', null, {
          width: 'auto',
          height: 'auto'
        });
        resolve();
      }, 0);
    });
  };

  setOption = (option) => {
    if (!this.chart) {
      return;
    }
    this.chart.setOption(option);
  };

  dispose = () => {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  };

  resize = () => {
    this.chart && this.chart.resize();
  };

  getInstance = () => {
    return this.chart;
  };
}
