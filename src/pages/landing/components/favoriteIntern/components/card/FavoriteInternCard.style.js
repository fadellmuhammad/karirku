import styled from "styled-components"

export const FavoriteInternCardWrapp = styled.div`
  display: flex;
  justify-content: center;

  .intern-card {
    max-width: 90%;
    padding: 20px 20px;
    border-radius: 21px;
    background: #FFFFFF;
    box-shadow: 5px 4px 10px 0px #79797929;
    /* background: linear-gradient(131.28deg, #FE8AB5 1.81%, #F55686 95.43%); */
    
    @media (max-width: 600px) {
      border-radius: 15px;
      padding: 5px 20px;
    }

    .content {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;

      .logo-company {
        margin-right: 8px;

        img {
          width: 60px;
        }
      }

      .container-title {
        color: black;

        .role {
          margin-top: 5px;
          font-size: 16px;
        }
      }
    }
  }
`
