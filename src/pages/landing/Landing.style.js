import styled from "styled-components"

export const LandingWrapp = styled.section`
  margin-top: 60px;

  .background-color {
    background-color: #F8F8F8;
    padding-bottom: 30px;
    min-height: 450px;
  }
  
  .landing {
    display: flex;
    justify-content: space-around;
    padding-top: 50px;

    @media (max-width: 1050px) {
      padding-top: 10px;
      flex-direction: column;
    }
    .left {
      .content {
        .title {
          margin-top: 30px;
          margin-bottom: 10px;
          max-width: 250px;
          font-weight: 700;
          font-size: 4.5rem;
          line-height: 45px;
          span {
            color: #FEB25A;
          }
        }
        .desc {
          max-width: 400px;
          font-size: 16px;
        }
        .section {
          display: flex;
          margin-top: 15px;

          button {
            width: 60%;
            height: 40px;
            background: linear-gradient(180deg, #FD88B3 0%, #F86896 100%);
            box-shadow: 1px 5px 14px rgba(250, 113, 158, 0.42);
            border-radius: 61px;
            border: none;
            color: white;
          }

          .info {
            h1 {
              text-align: center;
              font-weight: 700;
            }
          }
        }
      }
    }
    .right {
      justify-content: flex-end;
      .background-image {
        width: 100%;
        .image {
          display: flex;
          justify-content: flex-end;

          img {
            width: 200px;
          }
        }
      }
    }
  }
`
