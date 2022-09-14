import styled from "styled-components"

export const FavoriteInternWrapp = styled.section`
  .favorite-intern {
    padding: 80px 0;
    .title {
      text-align: center;
      margin-bottom: 50px;
    }
    .favintern-card-container {
      display: grid;
      grid-template-columns: auto auto auto auto;
      gap: 20px;
      justify-content: space-between;

      @media (max-width: 1080px) {
        grid-template-columns: auto auto;
        justify-content: space-around;
      }
      @media (max-width: 600px) {
        grid-template-columns: auto;
      }
    }
  }
`
