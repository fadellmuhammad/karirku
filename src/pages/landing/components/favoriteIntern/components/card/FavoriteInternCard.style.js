import styled from "styled-components"

export const FavoriteInternCardWrapp = styled.div`
  .intern-card {
    /* max-width: 100%; */
    width: 280px;
    /* height: 160px; */
    padding: 30px 20px;
    border-radius: 21px;
    background: linear-gradient(131.28deg, #FE8AB5 1.81%, #F55686 95.43%);
    /* box-shadow: 0px 13px 16px rgba(246, 92, 139, 0.49); */
    
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
      }

      .container-title {
        color: white;
      }
    }
  }
`
