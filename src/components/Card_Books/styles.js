import styled from 'styled-components';

export const Containner = styled.div`
 
 .titulo{
    padding-left:40px;
    padding-top:10px;
 }
`;

export const Content = styled.div`
  width:100%;
   margin: 2% auto;
  display:flex;

.item-book{
    width: 9999999px;
    width:33%;
    height:380px;
    box-shadow: 1px 0px 3px #0c854e;
    margin-left:30px;

    img{
       width:100%;
       height:270px;
       width:300px;
       border-bottom:1px solid #ddd;
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
    
   }`