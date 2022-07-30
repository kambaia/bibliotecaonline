import styled from "styled-components";

export const ContentSession = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 2px 1px 10px #d0d9d5;
  padding: 40px;

  .bainner-titulo {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .pesquisar {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 70%;
        outline: none;
        border: 1px solid #0c854e;
        box-shadow: 0px 0px 5px #0c854e;
        padding: 8px;
        margin-top: 5px;
        font-size: 1.1rem;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      button {
        width: 4%;
        outline: none;
        border: 1px solid #0c854e;
        box-shadow: 0px 0px 5px #0c854e;
        padding: 8px;
        margin-top: 5px;
        font-size: 1.1rem;
        background: #fff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Containner = styled.div`
  align-items: center;
  padding: 30px;
  margin-bottom: 50px;
  .titulo {
    padding-left: 40px;
    padding-top: 10px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
  align-items: center;
  padding: 20px 40px 0px 10px;


  

 .item-book {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  max-height: 450px;
  border-radius: 8px;

}
.item-book {
  background-color: transparent;
  text-decoration: none;
  color: #111;
}
a{
  text-decoration: none;
  color: #555;
}

.item-book .img-body  img {
  max-width: 100%;
  width: 100%;
  height: 200px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  padding:5px;

}

.content-descri{
  position: relative;
  height: 200px;

  .item-tilulo{
    font-size:15pt;
    color: #0c854e;
    padding: 20px;
    padding: 15px;
  }

  .item-discription{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-link-downlad{
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
      .redes-social{
        display: flex;
        p{
          padding: 0px 10px;
        }
      }
  }
}


`;


