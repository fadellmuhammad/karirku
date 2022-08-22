import styled from "styled-components"

export const TestimonialWrapp = styled.section`
  background: #FCF9F4;
  height: 500px;

  .testimonial {
    padding: 80px 0;

    .title {
      text-align: center;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 50px;
    }

    .testimonial-card-container {
      display: grid;
      grid-template-columns: auto auto auto auto;
      gap: 20px;
      justify-content: space-between;
    }
  }
`
