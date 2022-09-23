import styled from "styled-components"

export const HeaderWrapp = styled.div`
  .header {
    background-color: white;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;

    .header-content {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .list {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 700;

        li {
          margin-left: 50px;
        }

        img {
          width: 158px;
          height: 40px;
        }

        .logo {
          margin: 0 100px;
        }
      }

      .hamburger img {
          width: 30px; 
        }
    }
  }
  

  @media (max-width: 761px) {
    .display-desktop {
      display: none;
    }
  }

  @media (min-width: 762px) {
    .display-mobile {
      display: none;
    }
  }
`
