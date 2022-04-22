import React from 'react';

import Card from './card';
import DataOverViewStyles from './styles';

import {
  CAR_NUMBER,
  TRASH_TRANSPORTED,
  DRIVING_COURSE,
  COMMUNITY_PASSED
} from '../../common';
import { formatter, configCreator } from '../../utils';

export default function DataOverView(props) {
  const {
    carNumber,
    trashTransported,
    drivingCourse,
    communityPassed
  } = props.dataOverviewInformation;
  const config1 = configCreator(carNumber[0], '{nt} / {nt}');
  const config2 = configCreator(trashTransported, '{nt}', formatter);
  const config3 = configCreator(drivingCourse, '{nt}', formatter);
  const config4 = configCreator(communityPassed, '{nt}');

  return (
    <DataOverViewStyles>
      <Card content={CAR_NUMBER} config={config1} />
      <Card content={TRASH_TRANSPORTED} config={config2} />
      <Card content={DRIVING_COURSE} config={config3} />
      <Card content={COMMUNITY_PASSED} config={config4} />
    </DataOverViewStyles>
  );
}
