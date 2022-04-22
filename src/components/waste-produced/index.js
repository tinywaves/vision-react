import React from 'react';

import { ConicalColumnChart } from '@jiaminghi/data-view-react';
import WasteProducedStyles from './styles';

export default function WasteProduced(props) {
  const config = {
    data: props.wasteProducedData,
    showValue: true
  };

  return (
    <WasteProducedStyles>
      <ConicalColumnChart
        config={config}
        style={{ width: '100%', height: '200px' }}
      />
    </WasteProducedStyles>
  );
}
