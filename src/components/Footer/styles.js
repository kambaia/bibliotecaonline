import styled from 'styled-components';
export const Content = styled.div`
   height:60px;
   width:100%;
   position: fixed;
   bottom:0px;
   padding:10px;
   margin-top:10px;
   z-index:10;
   background-color:#fff;
   
`;

export const FooterCard = styled.div`
   display:flex;
   width:100%;
   justify-content:space-between;
   .redes-sociais ul{
      display:flex;
      width:30%;
      align-items:center;
      li{
         margin-left:1rem;
         display:block;
         a {
         font-size:1.5em;
         text-decoration:none;
         color:#0c854e;
         

         }
      }
   }
   .Redes-comunicar ul{
      display:flex;
      width:100%;
      align-items:center;
      li{
         margin-left:1rem;
         display:block;
         a {
         font-size:1em;
         text-decoration:none;
         color:#0c854e;
         

         }
      }
   }

`;
