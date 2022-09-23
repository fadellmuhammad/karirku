import styled from "styled-components"

export const LandingWrapp = styled.section`
  margin-top: 60px;

  .background-color {
    background-color: #F8F8F8;
    padding-bottom: 30px;
    min-height: 600px;
  }
  
  .landing {
    /* display: grid; */
    /* grid-template-columns: 40% 60%; */
    /* grid-template-columns: auto auto; */
    /* gap: 20px; */
    display: flex;
    /* justify-content: space-around; */
    /* padding: 100px 50px; */
    /* height: 700px; */

    @media (max-width: 1050px) {
      flex-direction: column;
    }
    .left {
      display: flex;
      .content {
        .title {
          margin-top: 30px;
          max-width: 200px;
          font-weight: 700;
          font-size: 4.5rem;
          line-height: 45px;
          /* letter-spacing: 0.035em; */
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
            /* max-width: 256px; */
            width: 60%;
            height: 40px;
            background: linear-gradient(180deg, #FD88B3 0%, #F86896 100%);
            box-shadow: 1px 5px 14px rgba(250, 113, 158, 0.42);
            border-radius: 61px;
            border: none;
            color: white;
            /* margin-right: 50px; */
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
      display: flex;
      justify-content: flex-end;
      .background-image {
        /* right: 100px; */
        /* width: 533px; */
        width: 100%;
        /* height: 362px; */
        /* background: linear-gradient(180deg, #FE8AB5 0%, #F86795 100%); */
        /* box-shadow: 12px 12px 38px rgba(0, 0, 0, 0.12); */
        /* border-radius: 29px; */
        .image {
          display: flex;
          justify-content: flex-end;
          /* margin-right: 30px; */
          /* padding: 20px; */

          img {
            width: 200px;
            position: absolute;
            top: 300px;
          }
        }
      }
    }
  }
`
