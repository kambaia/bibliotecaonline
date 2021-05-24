import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin: 2% auto;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;

  .item-book {
    width: 9999999px;
    width: 350px;
    height: 380px;
    box-shadow: 1px 0px 3px #0c854e;
    padding: 10px;

    img {
      width: 100%;
      height: 270px;
      width: 300px;
      border-bottom: 1px solid #ddd;
    }
    .content-descri {
      text-align: center;
      padding: 10px;
      h2,
      span {
        padding: 10px;
      }
      .item-link-downlad {
        border-top: 1px solid #ddd;
        margin-top: 5px;
        padding: 10px;
        a {
          text-decoration: none;
          text-align: justify;
          color: #0c854e;
        }
      }
    }
  }
`;

export const ContanetBook = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  overflow-x: auto;
  .titulo {
    padding-left: 40px;
    padding-top: 10px;
  }
`;
