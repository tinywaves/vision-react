import styled from 'styled-components';

const AppStyles = styled.div`
  height: 100%;
  width: 100%;

  .content {
    height: 87%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left,
    .center,
    .right {
      height: 100%;
    }

    .left {
      width: 950px;
    }

    .center {
      width: 100%;

      .line-map {
        width: 100%;
        height: 77%;
      }

      .garbage-trend-style {
        width: 100%;
        height: 23%;
      }
    }

    .right {
      width: 950px;

      .garbage-truck-surplus {
        height: 33%;
      }

      .trash-stock {
        height: 33%;
      }

      .garbage-truck-finished {
        height: 33%;
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default AppStyles;
