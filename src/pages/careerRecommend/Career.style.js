import styled, { keyframes } from "styled-components"

const fade_in = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`
const fade_out = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`

export const CareerWrapp = styled.div`
  background-color: #F8F8F8;
  margin-top: 50px;

  .career {
    display: flex;
    justify-content: center;

    .content {
      margin: 100px 0;
      width: 816px;
      animation: ${fade_in} 0.3s ease-in-out;
    }

    .question {
      text-align: center;
      margin-bottom: 30px;
    }

    .answers {
      .answer {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 25px;
        width: 100%;
        max-width: 816px;
        height: 68px;
        background: #FFFFFF;
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.04);
        border-radius: 12px;
        margin-bottom: 12px;
        transition: all .2s ease-in-out;
      }
      .answer:hover {
        transform: scale(1.01);
      }
    }
  }
`
