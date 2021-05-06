import styled from 'styled-components';

export const Containner = styled.div`
   box-shadow: 2px 1px 10px #0c854e;
   height:60px;
   width:100%;
   position: fixed;
   z-index:10;
   background-color:#fff;
  

   .content{
       display: flex;
       justify-content: space-between;
       align-items:center;
       .logo{
           width:10%;
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
           width:90%;
           margin-right:20px;
           align-items:center;
          
           
           .public{
            display:flex;
            width:70%;
            justify-content:flex-right;
            margin-right:20px;
            align-items:center; 
            
           }
           .private{
            display:flex;
            width:20%;
            justify-content:flex-end;
            margin-right:20px;
            align-items:center; 
           }
           .login{
            display:flex;
            width:35%;
            justify-content:flex-end;
            margin-right:20px;
            align-items:center; 
            margin-left:10px;
           }
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