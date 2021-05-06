import Styled from 'styled-components';

export const DropDown = Styled.section `
    width: ${props => props.size}%;
    -webkit-user-select: none;
    -moz-user-select: none;
    position: relative;
`;

export const Placeholder = Styled.div `
        width:90%;
        outline:none;
        border:1px solid #0c854e;
        box-shadow:0px 0px 5px #0c854e;
        padding:8px;
        margin-top:5px;
        font-size:1.1rem;
        border-radius:5px;
        color:#555;
        color: ${props => props.colorSelected};
        display: flex;
        width: ${props => props.size}px;
        justify-content: space-between;
`;

export const ListView = Styled.ul `
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    position: absolute;
    max-height: 200px;
    overflow: auto;
    left: 0;
    right:0;
    background-color: #fff;
    z-index: 100;
    width:90%;
`;

export const Option = Styled.li `
    width:100%;
    border-bottom: 1px solid #0c854e;
    padding: 10px;
    list-style: none;
    cursor: pointer;

    :hover {
        background-color: #eee;
    }
`;