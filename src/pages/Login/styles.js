import styled from 'styled-components';

export const Containner = styled.div`
position:absolute;
 top:5%;
 width:100%;
 height: 110vh;
`;

export const CardLogin = styled.div`
  width:100%;
   margin: 2% auto;
   padding:20px;
   justify-content:flex-end;
   display:flex;
   .eslog{
    justify-content:center;
    flex-direction:column;
    display:flex;
    align-items:center;
    padding:20px;
    width:50%;
   }
   h1{
     color:#fff;
     font-size:3rem;
   }
   span{
     margin-top:10px;
     color:#fff;
     font-size:1.2rem;
   }
  
`

   
export const Form = styled.div`
 background-color:#fff;
  height:550px;
  border:4px solid #0c854e;
  width:40%;
  display:flex;
  flex-direction:column;
  border-radius:10px;
  .btn-acesso{
    button{
      width:50%;
      padding:8px;
      background-color:#0c854e;
      border: 1px solid #fff;
      cursor: pointer;
    }
  }

`
   
export const FormLogin = styled.div`
background-color:#fff;
 height:550px;
 width:100%;
 display:flex;
 flex-direction:column;
 border-radius:10px;
 .text-registro{
     border-bottom:1px solid #ddd;
     padding:20px;
     h2{
         font-size:1.2em;
     }
 }
 .f-login{
   display:flex;
   justify-content:space-between;
   align-items:center;
   a{
       margin-left:5%; 
       color:#0c854e;
   }
   .btn-login{
       margin-right:5%;
       width:20%;
       cursor: pointer;
   }
   
 }


`