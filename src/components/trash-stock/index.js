import React from 'react';

import BasicChart from '../basic-chart';

import { trashStockOptionCreator } from '../../utils/optionCreators';

export default function TrashStock(props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <BasicChart
        option={trashStockOptionCreator(
          props.trashStockDataX,
          props.trashStockDataY
        )}
      />
    </div>
  );
}
