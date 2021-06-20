import React from "react";
import { Containner, Content } from "./styles";
import b1 from "../../assets/capa6.png";
import b2 from "../../assets/capa2.png";
import b4 from "../../assets/capa3.webp";

export default function index() {
  return (
    <Containner>
      <div className="titulo">
        <h2>Novos Livros</h2>
      </div>
      <Content>
        <div className="item-book">
          <div>
            <img src={b2} />
          </div>
          <div className="content-descri">
            <div className="item-tilulo">
              <h3>Bibioteca Vitual </h3>
            </div>
            <div className="item-discription">
              <span>
                <strong>Feito por: </strong>Igor Masalino
              </span>
              <div className="item-link-downlad">
                <span>
                  <a href="#">Baixar</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="item-book">
          <div>
            <img src={b4} />
          </div>
          <div className="content-descri">
            <div className="item-tilulo">
              <h3>A verdadeira história de Angola</h3>
            </div>
            <div className="item-discription">
              <span>
                <strong>Feito por: </strong>Marisa Afonso</span>
              <div className="item-link-downlad">
                <span>
                  <a href="#">Baixar</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="item-book">
          <div>
            <img src={b1} />
          </div>
          <div className="content-descri">
            <div className="item-tilulo">
              <h3>Tentencias do criscimento das T.I</h3>
            </div>
            <div className="item-discription">
              <span>
                <strong>Feito por: </strong>Marcio José</span>
              <div className="item-link-downlad">
                <a href="#">Baixar</a>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Containner>
  );
}
