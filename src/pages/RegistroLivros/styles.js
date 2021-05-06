import styled from 'styled-components';

export const ContentSession = styled.section`
   width:100%;
   display:flex;
   box-shadow: 2px 1px 10px #d0d9d5;
   padding:10px 40px 100px 10px;
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
     display:flex;
     justify-content:space-between;

`
export const CardForm = styled.div`
     width:70%;
     box-shadow:0px 0px 4px #555;
     display:flex;
     flex-direction:column;
     text-align:center;
     padding:10px;
     .reader-top{
          border-bottom:1px solid #ddd;
          display:flex;
          button{
               width:24%;
               padding:8px;
               background:#fff;
               border-style:none;
               border-left:1px solid #ddd;
               cursor: pointer;
          }
     }
     .info{
          h3{
               padding:20px;
          }
     }
     
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
     label#foto{
          margin-bottom:20px;
          border:1px dashed;
          background-size:cover;
          cursor: pointer;
          display:flex;
          height:160px;
          justify-content:center;
          align-items:center;
          width:90%;
          margin:auto;

     }
     label#foto input{
          display:none;
     }
     label#foto.remove-elemet .icon{
          display:none;
     }
     label#foto.remove-elemet{
          border:0;
     }
     label#arquivo{
          margin-bottom:20px;
          border:1px dashed;
          background-size:cover;
          cursor: pointer;
          display:flex;
          height:60px;
          justify-content:center;
          align-items:center;
          width:90%;
          margin:auto;  
     }
     label#arquivo input{
          display:none;
     }
     .select-op{
       width:40%;
        outline:none;
        border:1px solid #0c854e;
        box-shadow:0px 0px 5px #0c854e;
        padding:8px;
        margin-top:5px;
        font-size:1.1rem;
        border-radius:5px;
        color:#555;
     }
`
export const CardMenu = styled.div`
     width:20%;
     height:500px;
     overflow-y:auto;
     border-right:1px solid #ddd;
`
export const Messagem = styled.div`
   background-color:rgba(0,0,0,0.8);
   width:100%;
   height:90%;
   z-index:5;
   position:absolute;
   top:0;
     .Alerta {
       background-color:#fff;
       height:300px;
         margin:10% auto;
         width:30%;
        
     }
     .close{
        display:flex;
         flex-direction:column;
         justify-content:end;
         align-items:flex-end;
         border-bottom:1px solid #0c854e;
         padding:10px;
        
     }
     .card-body{
          display:flex;
         justify-content:center;
         align-items:center;
         text-align:center;
         width:100%;
         height:60%;
         
     }
`


