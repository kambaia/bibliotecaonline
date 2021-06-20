import React from 'react'
import {Containner } from './styles';
import * as FaIcons from 'react-icons/fa';
export default function index() {
    return (
        <Containner>
            <div className="content">
            <div className="logo">
                Encontre os melhores trabalhos aqui
            </div>
           <ul>
               <li><a href="#"><span><FaIcons.FaBook color="#0c854e" size={15}/></span>Livros dos escolar</a></li>
               <li><a href="#"><span><FaIcons.FaGraduationCap color="#0c854e" size={15}/></span>Novidades</a></li>
               <li><a href="#"><span><FaIcons.FaBook color="#0c854e" size={15}/></span>Livros recomendados</a></li>
               <li><a href="#"><span><FaIcons.FaBook color="#0c854e" size={15}/></span>Livros infantis</a></li>
               <li><a href="#"><span><FaIcons.FaSearch color="#0c854e" size={15}/></span>Procurar</a></li>
               <li><a href="#"><span><FaIcons.FaBook color="#0c854e" size={15}/></span>Saiba mais</a></li>
               <li><a href="#">Acessa</a></li>
               <li><a href="#">Registrar-se</a></li>
           </ul>
            </div>
            
        </Containner>
    )
}
