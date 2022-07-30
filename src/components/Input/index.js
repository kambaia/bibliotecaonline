import React from 'react'
import styled from 'styled-components';

export const InputFilder = styled.div`
    margin-top:10px;
    input {
        width:90%;
        outline:none;
        border:1px solid #0c854e;
        box-shadow:0px 0px 5px #0c854e;
        padding:8px;
        margin-top:5px;
        font-size:1.1rem;
        border-radius:5px;
        color:#555;
    }
    textarea{
        width:90%;
        outline:none;
        border:1px solid #0c854e;
        box-shadow:0px 0px 5px #0c854e;
        padding:8px;
        margin-top:5px;
        font-size:1.1rem;
        border-radius:5px;
        color:#555;
    }
    select{
        width:90%;
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


export default function Input({ type, name, accept, value, placeholder,disabled, onchange}) {
    return (
        <div>
            <InputFilder>
               <input type={type} accept={accept} name={name} placeholder={placeholder} value={value} onChange={onchange} disabled={disabled}  />
            </InputFilder>
        </div>
    )
}


export function TextArea({ name, text,value,defaultValue, onchange, placeholder}) {
    return (
        <div>
            <InputFilder>
                <textarea name={name} value={value} cols="30" rows="10" onChange={onchange} defaultValue={defaultValue} placeholder={placeholder}>
                   
                </textarea>
            </InputFilder>
        </div>
    )
}

export function Select({ name, data, text, onchange}) {
  
    return (
        <div>
            <InputFilder>
               <select name={name} onChange={onchange}>
                   <option disabled selected>{text}</option>
                   {data && data.map((item, index)=>(
                       <option key={index} value={item.id}>{item.value}</option>
                   )) }
               </select>
            </InputFilder>
        </div>
    )
}
