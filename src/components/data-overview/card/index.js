import React from 'react';

import { BorderBox8, DigitalFlop } from '@jiaminghi/data-view-react';
import CardStyles from './styles';

export default function Card(props) {
  const content = props.content;
  const config = props.config;

  return (
    <CardStyles>
      <div className="card">
        <BorderBox8 style={{ height: '100%' }}>
          <div className="content">{content}</div>
          <DigitalFlop
            config={config}
            style={{ width: '200px', height: '50px' }}
          />
        </BorderBox8>
      </div>
    </CardStyles>
  );
}
