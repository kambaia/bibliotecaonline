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