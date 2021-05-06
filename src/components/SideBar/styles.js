import styled from 'styled-components';

export const Containner = styled.div`
   width:100%;
   z-index:10;
   background-color:#fff;

   .content{
       justify-content: space-between;
       align-items:center;
       text-align:center;
       
       .logo{
           width:100%;
           height:180px;
           border-bottom:1px solid #ddd;
           position: relative;
           img{
               width:150px;
               height:150px;
           }
          
           .user{
               width:100px;
               height:100px;
               border-radius:50%;
               left:30px;
               position: relative;
               border:1px solid #555;
              h1{
                position: absolute;
                left:20px;
                top:20px;
                color:#555;
              }
               
           }
       }
       ul{
         display:inline-block;
           width:100%;
           align-items:center;
           margin-top:10%;
             li{
                 display:block;
                 position: relative;
                 left:0;
                 text-align:justify;
                 padding-left:10px;
                 font-size:1.2rem;
                 border-bottom:1px solid #ddd;
                 padding:10px;
                 a{
                 color:#555;
                 text-decoration:none;
                 }
             }
           }

       
   }
`;