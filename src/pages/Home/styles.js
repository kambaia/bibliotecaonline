import styled from 'styled-components';

export const Containner = styled.div`
   box-shadow: 2px 1px 10px #0c854e;
   height:60px;
   width:100%;
   .content{
       display: flex;
       justify-content: space-between;
       flex-direction:column;
       align-items:center;
       .logo{
           width:20%;
           height:50px;
           img{
               width:100%;
               height:60px;
               width:60px;
               margin-left:15px;
           }
       }
       ul{
           display:flex;
           width:80%;
           justify-content:flex-end;
           margin-right:20px;
           align-items:center;
           li{
               display:block;
               margin-left:15px;
               margin-top:1.5rem;
               a{ 
                   font-size:16px;
                   text-decoration:none;
                   color:#555;
                   span{
                       padding-right:6px;
                   }
                   :hover{
                       color:#0c854e;
                   }
                }
           }

       }
   }
`;

export const ContentSession = styled.section`
   width:100%;
   display:flex;
   height:100%;
   box-shadow: 2px 1px 10px #d0d9d5;
   padding:10px;
   .bainner-titulo{
      text-align:center;
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      padding:20px;
      h1{
          font-size:3em;
          color:#fff;
      }
  }
  .bainner-card-book{
        width:100%;
        margin: 2% auto;
        display:flex;
        .item-book{
        width: 9999999px;
        width:33%;
        height:380px;
        box-shadow: 1px 0px 3px #0c854e;
        text-align:center;

        img{
        width:100%;
        height:270px;
        width:300px;
      
        }
        .content-descri{
        text-align:center;
        h2, span{
            padding:10px;

        }
        .item-link-downlad{
        border-top:1px solid #ddd;
            margin-top:5px;
            a{
                text-decoration:none;
                text-align:justify;
                color:#0c854e;
            }
        }
        }
    }

  }
`
export const ContentCategoria = styled.div`
   box-shadow: 2px 1px 10px #0c854e;
   width:25%;
   margin-top:1%;
   margin-left:10px;
  
   .text-categoria{
      padding:20px 20px 10px 20px;
       border-bottom:1px solid #ddd;
       h2{
           font-size:1rem;
       }
   }
   ul{
    padding:20px 20px 10px 20px;
    li{
        display:block;
        margin-left:10px;
        border-bottom:1px solid #ddd;
        padding:5px;
        a{ 
            color:#555;
            text-decoration:none;
            span{
                    padding-right:6px;
                   }
                   :hover{
                       color:#0c854e;
                   }
        }
    }
   }
`;
