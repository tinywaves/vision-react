import React from 'react';

import BasicChart from '../basic-chart';

import { truckSurplusOptionCreator } from '../../utils/optionCreators';

export default function TruckSurplus(props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <BasicChart option={truckSurplusOptionCreator(props.truckSurplusData)} />
    </div>
  );
}
