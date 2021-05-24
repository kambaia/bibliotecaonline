import React from 'react'
import {Containner } from './styles';
import * as FaIcons from 'react-icons/fa';
import logo from '../../assets/lg.png';
export default function SideBar() {
    return (
        <Containner>
            <div className="content">
            <div className="logo">
               <img src={logo}/>
            </div>
           <ul>
               <div className="public">
                    <li><a href="/perfil"><span><FaIcons.FaAngleRight color="#0c854e" size={15}/></span>Perfil</a></li>
                    <li><a target="_blank" href="/livros"><span><FaIcons.FaAngleRight color="#0c854e" size={15}/></span>Meus levros</a></li>
                    <li><a target="_blank" href="/favorito"><span><FaIcons.FaAngleRight color="#0c854e" size={15}/></span>Livros favorito</a></li>
                    <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100041961194579"><span><FaIcons.FaAngleRight color="#0c854e" size={15}/></span>Partilhar</a></li>
               </div>
           </ul>
        </div>
            
        </Containner>
    )
}
