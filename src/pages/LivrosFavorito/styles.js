import styled from 'styled-components';


export const ContentSession = styled.section`
   width:100%;
   display:flex;
   height:100%;
   box-shadow: 2px 1px 10px #d0d9d5;
   padding:40px;
   .bainner-titulo{
      text-align:center;
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      padding:20px;
      .pesquisar{
          width:100%;
          display:flex;
          justify-content:center;
          align-items:center;
          input {
            width:70%;
            outline:none;
            border:1px solid #0c854e;
            box-shadow:0px 0px 5px #0c854e;
            padding:8px;
            margin-top:5px;
            font-size:1.1rem;
            border-top-left-radius:5px;
            border-bottom-left-radius:5px;
          }
          button{
            width:4%;
            outline:none;
            border:1px solid #0c854e;
            box-shadow:0px 0px 5px #0c854e;
            padding:8px;
            margin-top:5px;
            font-size:1.1rem;
            background:#fff;
            border-top-right-radius:5px;
            border-bottom-right-radius:5px;
            cursor: pointer;
          }
      }
  }
 `
export const CardBooks = styled.div`
   box-shadow: 1px 1px 5px #0c854e;
    width:22%;
    margin-top:1%;
    height:430px;
    margin-left:30px;
    position: relative;
   a{
     text-decoration:none;
     color:#555;
   }
   .card-capa{
    width:100%;
    text-align:center;
    border-bottom: 1px solid #ccc;
    
    img{
        width:100%;
        width:250px;
        height:250px;
    }
    
   }
   .card-desc{
         padding:20px 5px 20px 20px;
         border-bottom: 1px solid #ccc;
         display:flex;
         justify-content:space-between;
         margin-top:10px;
         height:100px;
        span{
            font-size:1.2em;
        }
    }
    .rodape {
      display:flex;
      width:100%;
      align-items:center;
      justify-content:space-between;
     
      ul{
        display:flex;
        width:100%;
        align-items:center;
      
      li{
         margin-left:1rem;
         display:block;
         margin-top:1.5rem;
         a {
         font-size:1em;
         text-decoration:none;
         color:#0c854e;
         

         }
      }
      }
      .baixar{
        width:50%;
        span{
          margin-left:1rem;
         display:block;
         margin-top:1.5rem;
        }
      }
    }
`;
