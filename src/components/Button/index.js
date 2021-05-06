import React from 'react'
import styled from 'styled-components';

export const ButtonFilder = styled.div`
    button{
      width:100%;
      padding:8px;
      background-color:#0c854e;
      border: 1px solid #fff;
      margin-top:10px;
      margin-right:5%;
      color:#fff;
      border-radius:5px;
    }
`


export default function Button({value, onClick}) {
    return (
        <div>
            <ButtonFilder>
               <button onClick={onClick}>{value}</button>
            </ButtonFilder>
        </div>
    )
}
