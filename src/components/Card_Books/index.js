import React from 'react'
import {Containner, Content } from './styles';
import b1 from '../../assets/b1.png';
import b2 from '../../assets/b2.png';
import b4 from '../../assets/b4.png';

export default function index() {
    return (
        <Containner>
            <div className="titulo"><h2>Novos Livros</h2></div>
            <Content>
            <div className="item-book">
               <div>
                    <img src={b2}/>
                </div>
                <div className="content-descri">
                    <div className="item-tilulo">
                        <h2>Mauratia piramides</h2>
                    </div>
                    <div className="item-discription">
                        <span>Caçada na Alvor</span>
                        <div className="item-link-downlad">
                            <span><a href="#">Baixar</a></span>
                        </div>
                    </div>
                </div>
               
            </div>

            <div className="item-book">
               <div>
                    <img src={b4}/>
                </div>
                <div className="content-descri">
                    <div className="item-tilulo">
                        <h2>Mauratia piramides</h2>
                    </div>
                    <div className="item-discription">
                        <span>Caçada na Alvor</span>
                        <div className="item-link-downlad">
                            <span><a href="#">Baixar</a></span>
                        </div>
                    </div>
                </div>
               
            </div>
            
            <div className="item-book">
               <div>
                    <img src={b1}/>
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
            </Content>
          
        </Containner>
    )
}
