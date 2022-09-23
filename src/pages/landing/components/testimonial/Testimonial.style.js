import styled from "styled-components"

export const TestimonialWrapp = styled.section`
  background: #FCF9F4;
  max-height: 500px;

  .testimonial {
    padding: 5rem 0;

    .title {
      text-align: center;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .testimonial-card-container {
      display: grid;
      grid-template-columns: auto auto auto auto;
      gap: 15px;
      justify-content: space-between;

      @media (max-width: 1440px) {
        overflow-x: scroll;
        ::-webkit-scrollbar {
          display: none;
        }
      }
    }

  }
`
