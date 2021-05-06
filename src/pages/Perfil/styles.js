import styled from 'styled-components';

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

`

export const Content = styled.div`
     width:100%;
     display:flexbox;
     justify-content:space-between;
     padding:10px;


`
export const CardForm = styled.div`
     width:70%;
     box-shadow:0px 0px 4px #555;
     padding:20px;
     display:flex;
     flex-direction:column;
     text-align:center;
     form{
     .btn-up{
       width:90%;
       display:flex;
       flex-direction:column;
       justify-content:flex-end;
       margin:auto;
      button{
           width:150px;
      }
     }
     }
`
export const CardMenu = styled.div`
     width:20%;
     height:500px;
     overflow-y:auto;
     border-right:1px solid #ddd;
`



