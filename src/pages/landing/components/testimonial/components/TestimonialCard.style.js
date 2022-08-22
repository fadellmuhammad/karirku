import styled from "styled-components"

export const TestimonialCardWrapp = styled.div`
  .testimonial-card {
    width: 306px;
    background: #FFFFFF;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.04);
    border-radius: 24px;
    padding: 25px;

    .profile {
      display: flex;
      margin-bottom: 15px;

      .profile-name {
        margin: auto 0;
        .name {
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
        }
        .role {
          font-weight: 500;
          font-size: 16px;
          line-height: 25px;
        }
      }

      .image-profile {
        margin-right: 15px;
      }
    }
  }
`
