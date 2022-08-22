import styled from "styled-components"

export const FavoriteInternCardWrapp = styled.div`
  .intern-card {
    width: 300px;
    height: 160px;
    border-radius: 21px;
    background: linear-gradient(131.28deg, #FE8AB5 1.81%, #F55686 95.43%);
    /* box-shadow: 0px 13px 16px rgba(246, 92, 139, 0.49); */
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
