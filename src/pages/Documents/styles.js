import styled from 'styled-components';
export const ContentSession = styled.section`
${props => console.log(props.publidade)};
   width:100%;
   display:flex;
   box-shadow: 2px 1px 10px #d0d9d5;
   padding-bottom:100px;
   align-items: center;
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
    box-shadow: 1px 0px 5px #0c854e;
    flex: 2;
    height:500px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #ddd;
    margin-left: 2em;
    margin-right: 2em;
 
    
   
    h2{
      border-bottom:1px solid #d0d9d5;
      padding:20px;
    }
  }
 `
export const CardBooks = styled.div`
   box-shadow: 1px 1px 5px #0c854e;
    position: relative;
    flex: 2.5;
    height:auto;
    margin-left: 2em;
    margin-right: 2em;
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
     padding:10px 10px 100px 10px;
     
   }
   .card-capa{
    width:100%;
    text-align:center;
    img{
      max-width: 100%;
        width:100%;
        width:300px;
        height:300px;
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
            padding:5px;
           
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
