import React from 'react'
import logo from '../../assets/logo.png';
import {Containner } from './styles';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import { UserAuth, BooksAuth } from '../../providers/auth';
export default function Header() {
      const {user} = UserAuth();
      const {livros} = BooksAuth();
      const token = localStorage.getItem('app-token');
      const Logout = ()=>{ 
        localStorage.removeItem('app-token');
        //isAuthenticated && dispatch(logout())
    }
    return (
        <Containner>
            <div className="content">
            <div className="logo">
                <a href="/"><img src={logo} alt="Logo" height={80} width={80}/></a>
               {console.log(console.log(user))}
            </div>
           <ul>
               <div className="public">
                    <li><a href="#"><span><FaIcons.FaBookOpen color="#0c854e" size={15}/></span>Livros escolar</a></li>
                    <li><a href="#"><span><FaIcons.FaGraduationCap color="#0c854e" size={15}/></span>Novidades</a></li>
                    <li><a href="#"><span><FaIcons.FaBook color="#0c854e" size={15}/></span>Livros recomendados</a></li>
                    <li><a href="/livros"><span><FaIcons.FaBookReader color="#0c854e" size={15}/></span>Livros</a></li>
               </div>
               {token? 
               <>
                <div className="private">
                    <li><a href="#">Favoritos </a></li>
                    <li><a href="/registro">Registros</a></li>
                    <li><a href="/perfil">Perfil</a> </li>
               </div>
               </>:  ''
               }
               {
                   token? 
                   <>
                    <div className="login"> 
                        <li><a href="/perfil"><span><FiIcons.FiUser size={15}/></span><span></span></a> </li>
                        <li onClick={()=>Logout()}><a href="#"><span><FiIcons.FiLogOut size={15}/></span><span>Sair</span></a> </li>
                       
                  </div>
                   </>
                   :
                   <>
                    <div className="login">
                    <li><a href="/login"><span><FiIcons.FiLogIn size={15}/></span><span>Acessa</span></a> </li>
                    </div>

               </>
               }
           </ul>
            </div>
            
        </Containner>
    )
}
