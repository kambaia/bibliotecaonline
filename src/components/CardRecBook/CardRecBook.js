// @flow
import * as React from 'react';

import b4 from '../../assets/b4.png';
import {Content, ContanetBook } from './styles';
const  CardRecBook = ()=>{
    return (
      <Content>
          <div><h1>Todos os dias você aprende uma coisa nova aqui no seu gabarito de conhecimento</h1></div>
        <ContanetBook>
            <div className="item-book">
                    <div style={{borderBottom: '1px solid #ddd'}}>
                        <img src={b4} alt="b4"/>
                    </div>
                    <div className="content-descri">
                        <div className="item-tilulo">
                            <h2>Mauratia piramides</h2>
                        </div>
                        <div className="item-discription">
                            <span>Caçada na Alvor</span>
                            <div className="item-link-downlad">
                                <a href="#">Baixar</a>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="item-book">
                    <div style={{borderBottom: '1px solid #ddd'}}>
                        <img src={b4} alt="b4"/>
                    </div>
                    <div className="content-descri">
                        <div className="item-tilulo">
                            <h2>Mauratia piramides</h2>
                        </div>
                        <div className="item-discription">
                            <span>Caçada na Alvor</span>
                            <div className="item-link-downlad">
                                <a href="#">Baixar</a>
                            </div>
                        </div>
                    </div>
                </div>     

                <div className="item-book">
                    <div style={{borderBottom: '1px solid #ddd'}}>
                        <img src={b4} alt="b4"/>
                    </div>
                    <div className="content-descri">
                        <div className="item-tilulo">
                            <h2>Mauratia piramides</h2>
                        </div>
                        <div className="item-discription">
                            <span>Caçada na Alvor</span>
                            <div className="item-link-downlad">
                                <a href="#">Baixar</a>
                            </div>
                        </div>
                    </div>
                </div>     
                <div className="item-book">
                    <div style={{borderBottom: '1px solid #ddd'}}>
                        <img src={b4} alt="b4"/>
                    </div>
                    <div className="content-descri">
                        <div className="item-tilulo">
                            <h2>Mauratia piramides</h2>
                        </div>
                        <div className="item-discription">
                            <span>Caçada na Alvor</span>
                            <div className="item-link-downlad">
                                <a href="#">Baixar</a>
                            </div>
                        </div>
                    </div>
                </div>     
                <div className="item-book">
                    <div style={{borderBottom: '1px solid #ddd'}}>
                        <img src={b4} alt="b4"/>
                    </div>
                    <div className="content-descri">
                        <div className="item-tilulo">
                            <h2>Mauratia piramides</h2>
                        </div>
                        <div className="item-discription">
                            <span>Caçada na Alvor</span>
                            <div className="item-link-downlad">
                                <a href="#">Baixar</a>
                            </div>
                        </div>
                    </div>
                </div>     
                
        </ContanetBook>
      </Content>
    );
};

export default CardRecBook;