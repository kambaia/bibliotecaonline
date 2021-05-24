// @flow
import * as React from 'react';
import * as FaIcons from "react-icons/fa";

import {Content, ContanetBook } from './styles';
const  CardRecBook = ({item})=>{

    return (
      <Content>
        <ContanetBook>
            <div className="item-book">
                    <div style={{borderBottom: '1px solid #ddd'}}>
                        <img src={item.capa_ul && item.capa_ul} alt="b4"/>
                    </div>
                    <div className="content-descri">
                        <div className="item-tilulo">
                            <h3>{item.titulo}</h3>
                        </div>
                        <div className="item-discription">
                            <span>Caçada na Alvor</span>
                            <div className="item-link-downlad">
                            <span>
                            <a target="_blank" href={item.documento.documento_url}>
                            <span style={{ color: "#0c854e" }}>
                                <FaIcons.FaBookReader color="#0c854e" /> Ler
                            </span>
                </a>
              </span>
                            </div>
                        </div>
                    </div>
                </div> 

        </ContanetBook>
      </Content>
    );
};

export default CardRecBook;