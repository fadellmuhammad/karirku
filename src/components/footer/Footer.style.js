import styled from "styled-components"

export const FooterWrapp = styled.section`
  /* height: 250px; */
  background: #424242;
  color: white;
  padding: 50px 0;

  .content-footer {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    gap: 50px;
    margin-bottom: 20px;

    .about {
      max-width: 250px;

      .logos {
        margin-top: 15px;
        display: flex;
        align-items: center;

        .text {
          font-weight: 600;
          margin-left: 8px;
        }

        img {
          width: 30px;
        }
      }
    }

    .logo {
      display: flex;
      margin-bottom: 10px;

      h1 {
        margin: 0 0 0 8px;
      }
    }

    h1 {
      margin-bottom: 8px;
    }

    .navigation {
      a {
        color: white;
      }
    }

    .address {
      max-width: 250px;
    }
  }

  .copyright {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
`
