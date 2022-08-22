import styled, { keyframes } from "styled-components"

const fade = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

export const VacancyWrapp = styled.div`
  background-color: #F8F8F8;
  .vacancy {
    padding-top: 130px;
    padding-bottom: 90px;
    .content {
      display: grid;
      gap: 20px;
      grid-template-columns: 30% 60%;
      justify-content: center;

      .list-vacancy {
        .vacancy-item {
          cursor: pointer;
          display: flex;
          /* width: 354px; */
          height: 100px;
          background: #FFFFFF;
          box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.04);
          border-radius: 12px;
          padding: 15px;
          margin-bottom: 15px;

          .logo-company {
            display: flex;
            align-items: center;
            margin-right: 20px;
          }

          .company-profile {
            margin: auto 0;
            h1 {
              font-size: 20px;
            }
          }
        }
      }

      .content-description {
        /* width: 554px; */
        min-height: 537px;
        background: #FFFFFF;
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.04);
        border-radius: 12px;
        padding: 50px;

        .content-none {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: 400;
            letter-spacing: 3px;
            color: #D9D9D9;
        }

        .section-title {
          font-weight: 500;
          font-size: 20px;
          margin-top: 10px;
          /* line-height: 18px; */
        }
        .section-describe {
          text-align: justify;
        }
        .animation-show {
          opacity: 1;
          animation: ${fade} 0.2s ease-in-out;
        }
      }
    }
  }
`
