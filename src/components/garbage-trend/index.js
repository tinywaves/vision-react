import React from 'react';

import BasicChart from '../basic-chart';

import { garbageTrendOptionCreator } from '../../utils/optionCreators';

export default function GarbageTrend(props) {
  return (
    <div
      style={{
        width: '100%',
        height: '135%'
      }}
    >
      <BasicChart option={garbageTrendOptionCreator(props.garbageTrendData)} />
    </div>
  );
}
