import styled from 'styled-components';

const TopBarStyles = styled.div`
  .top-bar-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    color: #4397a5;

    .title {
      font-size: 20px;
      text-align: center;
    }

    .duration,
    .time {
      font-size: 14px;
      line-height: 28px;
      width: 300px;
    }

    .duration {
      text-align: left;
      margin-left: 30px;
    }

    .time {
      text-align: right;
      margin-right: 30px;
    }
  }
`;

export default TopBarStyles;
