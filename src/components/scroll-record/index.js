import React from 'react';

import { ScrollBoard } from '@jiaminghi/data-view-react';
import ScrollRecordStyles from './styles';

export default function ScrollRecord(props) {
  const config = {
    data: props.recordData,
    rowNum: 7,
    oddRowBGC: '#100f28',
    evenRowBGC: '#0b2832'
  };
  
  return (
    <ScrollRecordStyles>
      <ScrollBoard config={config} style={{ width: '100%', height: '220px' }} />
    </ScrollRecordStyles>
  );
}
