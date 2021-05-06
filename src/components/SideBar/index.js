import React from 'react'
import {Containner } from './styles';
import * as FaIcons from 'react-icons/fa';
import logo from '../../assets/lg.png';
import { UserAuth, BooksAuth } from '../../providers/auth';
export default function SideBar() {
      const {user} = UserAuth();
    return (
        <Containner>
            <div className="content">
            <div className="logo">
               <img src={logo}/>
            </div>
           <ul>
               <div className="public">
                    <li><a href="#"><span><FaIcons.FaAngleRight color="#0c854e" size={15}/></span>Perfil</a></li>
                    <li><a href="#"><span><FaIcons.FaAngleRight color="#0c854e" size={15}/></span>Meus levros</a></li>
                    <li><a href="#"><span><FaIcons.FaAngleRight color="#0c854e" size={15}/></span>Livros favorito</a></li>
                    <li><a href="/livros"><span><FaIcons.FaAngleRight color="#0c854e" size={15}/></span>Partilhar</a></li>
               </div>
           </ul>
        </div>
            
        </Containner>
    )
}
