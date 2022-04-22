/**
 * Formatting time function.
 * @param {Date} time The time needed to be formatted.
 * @param {String} fmt Formatted format.
 * @returns Returns the time after formatting.
 */
export const formatTime = (time, fmt) => {
  if (!time) {
    return '';
  } else {
    const date = new Date(time);
    const timeObject = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }
    for (const content in timeObject) {
      if (new RegExp('(' + content + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? timeObject[content]
            : ('00' + timeObject[content]).substr(
              ('' + timeObject[content]).length
            )
        );
      }
    }
    return fmt;
  }
};

/**
 * 数字翻牌器config生成函数
 * @param {Array} number 数字数值
 * @param {String} content 内容模版
 * @param {Function} 格式化数字
 * @returns 返回一个config配置
 */
export const configCreator = (number, content, formatter) => {
  if (formatter) {
    return {
      number,
      content,
      formatter
    };
  } else {
    return {
      number,
      content
    };
  }
};

/**
 * 格式化数据函数
 * @param {Number} number 被格式化的数据
 * @returns 返回一个经过千分位分隔符格式化后的字符串
 */
export const formatter = (number) => {
  const numbers = number.toString().split('').reverse();
  const result = [];

  while (numbers.length) {
    result.push(numbers.splice(0, 3).join(''));
  }
  return result.join(',').split('').reverse().join('');
};

/**
 * 
 * @param {Object} driverInformation 司机信息对象
 * @returns 返回一个经过处理的可以直接传入Descriptions组件的司机信息数组
 */
export const formatDriverInformation = (driverInformation) => ([
  {
    label: '司机姓名',
    value: driverInformation.driverName
  },
  {
    label: '司机编号',
    value: driverInformation.driverId
  },
  {
    label: '装载车编号',
    value: driverInformation.driverCar
  },
  {
    label: '电话号码',
    value: driverInformation.driverPhone
  },
  {
    label: '累计行驶里程',
    value: driverInformation.mileage
  },
  {
    label: '累计工作时长',
    value: driverInformation.duration
  }
]);

/**
 * description对象生成函数
 * @param {String} labelInfo label信息
 * @param {String} valueInfo value信息
 * @returns 返回一个description对象
 */
export const driverInformationObject = (labelInfo, valueInfo) => ({
  label: labelInfo,
  value: valueInfo
});
