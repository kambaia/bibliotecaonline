import styled from 'styled-components';
export const ContentSession = styled.section`
   width:100%;
   display:flex;
   height:100%;
   box-shadow: 2px 1px 10px #d0d9d5;
   padding:40px;
   margin-bottom:40px;
   .bainner-titulo{
     width:100%;
     h1{
       font-size:2rem;
       color:#fff;
       text-align:center;
     }
  }
  .publicidades{
    text-align:center;
    width:40%;
    box-shadow: 1px 0px 5px #0c854e;
    margin-left:2.5%;
    margin-top:-40px;
   
    h2{
      border-bottom:1px solid #d0d9d5;
      padding:20px;
    }
  }
 `
export const CardBooks = styled.div`
   box-shadow: 1px 1px 5px #0c854e;
    width:55%;
    margin-left:30px;
    position: relative;
    bottom:40px;
   a{
     text-decoration:none;
     color:#555;
   }
   .card-body-book{
    border-bottom: 1px solid #ccc;
    padding:10px 20px 10px 10px;
    .dist-text{
      padding:10px;
      margin-bottom:10px;
    }
   }
   .disc{
     display:flex;
     padding:10px;
     padding:10px 20px 100px 10px;
     
   }
   .card-capa{
    width:100%;
    text-align:center;
    img{
        width:100%;
        width:250px;
        height:250px;
    }
    
   }
   .card-desc{
         padding:20px 5px 20px 20px;
         display:flex;
         flex-direction:column;
         margin-top:-20px;
         height:100px;
        span{
            font-size:1.2em;
            padding:5px
        }
    }
    .rodape {
      display:flex;
      width:100%;
      align-items:center;
      justify-content:space-between;
      padding:10px 10px 20px 10px;
     
      ul{
        display:flex;
        width:100%;
        align-items:center;
      
      li{
         margin-left:1rem;
         display:block;
         margin-top:1.5rem;
         padding:10px;
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
         a{
           display:flex;
         }
        }
      }
    }
`;
