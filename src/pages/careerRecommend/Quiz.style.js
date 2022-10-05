import styled, { keyframes } from "styled-components"

const fade_in = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`

export const QuizWrapp = styled.div`
  background-color: #F8F8F8;
  
  .quiz {
    padding-top: 50px;
    display: flex;
    justify-content: center;
    margin: 60px auto;

    .content {
      margin: 120px 0;
      width: 816px;
      animation: ${fade_in} 0.3s ease-in-out;
    }

    .recommend {
       p, h4 {
        font-size: 20px;
       }
       .rec_role {
        margin-bottom: 10px;
       }
       .btn-rec {
        /* width: 100px; */
        margin-top: 20px;
        height: 50px;
        padding: 5px 20px;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        font-size: 18px;
        font-weight: bold;
       }
    }

    .question {
      text-align: center;
      margin-bottom: 30px;
    }

    .spin-load {
      .center {
        margin: auto;
      }
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

    .result {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      .btn-result {
        font-size: 17px;
        font-weight: bold;
        border-radius: 10px;
        border: 0;
        cursor: pointer;
        width: 150px;
        height: 50px;
      }
    }
  }
`
