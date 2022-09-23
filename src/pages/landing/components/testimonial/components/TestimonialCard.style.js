import styled from "styled-components"

export const TestimonialCardWrapp = styled.div`
  .testimonial-card {
    min-width: 270px;
    background: #FFFFFF;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.04);
    border-radius: 24px;
    padding: 20px;
    margin: 5px;

    .profile {
      display: flex;
      margin-bottom: 15px;

      .profile-name {
        margin: auto 0;
        .name {
          font-weight: 600;
          font-size: 2rem;
          line-height: 25px;
        }
        .role {
          font-weight: 500;
          font-size: 1.6rem;
          line-height: 25px;
        }
      }
      .image-profile {
        margin-right: 15px;
      }
    }
  }
`
