import React from 'react';

import { Charts } from '@jiaminghi/data-view-react';
import TaskCompletionStyles from './styles';

import { taskCompletionOptionCreator } from '../../utils/optionCreators';
import { radius } from '../../common';

export default function TaskCompletion(props) {
  const data = props.taskCompletionData;

  // 给每个对象添加radius属性
  for (let i = 1; i < data.length; i++) {
    data[i].radius = radius[i];
  }

  return (
    <TaskCompletionStyles>
      <div className="charts">
        <Charts
          option={taskCompletionOptionCreator(data)}
          style={{ height: '350px', width: '350px' }}
        />
      </div>
    </TaskCompletionStyles>
  );
}
