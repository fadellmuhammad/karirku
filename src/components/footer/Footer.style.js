import styled from "styled-components"

export const FooterWrapp = styled.section`
  background: #424242;
  color: white;
  padding: 50px 0;

  .content-footer {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2rem;
    margin-bottom: 2rem;

    .about {
      max-width: 250px;

      .logos {
        margin-top: 15px;
        display: flex;
        align-items: center;

        .text {
          font-weight: 600;
          margin-left: 1rem;
        }

        img {
          width: 30px;
        }
      }
    }

    .logo {
      display: flex;
      margin-bottom: 1rem;

      h1 {
        margin: 0 0 0 1rem;
      }
    }

    h1 {
      margin-bottom: 1rem;
    }

    .navigation {
      a {
        color: white;
      }
    }

    .address {
      max-width: 350px;
    }

    @media (max-width: 768px) {
      grid-template-columns: auto auto
    }
    @media (max-width: 426px) {
      grid-template-columns: auto
    }
  }

  .copyright {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }
`
