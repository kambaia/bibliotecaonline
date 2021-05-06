// @flow
import * as React from 'react';
import * as FaIcons from 'react-icons/fa';
import {Content, FooterCard } from './styles';
const  Footer = ()=>{
    return (
      <Content>
          <FooterCard>
              <div className="redes-sociais">
                  <ul>
                      <li><a href=""><span><FaIcons.FaFacebookF/></span></a></li>
                      <li><a href=""><span><FaIcons.FaInstagram/></span></a></li>
                      <li><a href=""><span><FaIcons.FaYoutube/></span></a></li>
                      <li><a href=""><span><FaIcons.FaTwitter/></span></a></li>
                      <li><a href=""><span><FaIcons.FaWhatsapp/></span></a></li>
                  </ul>
              </div>
              <div className="Redes-comunicar">
              <ul>
                      <li><a href="">Política de Privacidade  | </a></li>
                      <li><a href="">Comunicar infrações</a></li>
                      <li><a href="#"><span><FaIcons.FaInfo color="#0c854e" size={15}/></span>Saiba mais</a></li>
                  </ul>
              </div>
          </FooterCard>
      </Content>
    );
};

export default Footer;