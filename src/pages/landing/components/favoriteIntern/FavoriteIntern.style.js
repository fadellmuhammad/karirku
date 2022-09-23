import styled from "styled-components"

export const FavoriteInternWrapp = styled.section`
  .favorite-intern {
    padding: 50px 0 60px;
    .title {
      font-size: 20px;
      text-align: center;
      margin-bottom: 30px;
    }
    .favintern-card-container {
      display: flex;
      justify-content: space-around;
      gap: 20px;

      @media (max-width: 1050px) {
        flex-direction: column;
      }
    }
  }
`
