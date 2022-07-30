import React,{useState, useEffect} from 'react';
import logo from '../../assets/logo.png';
import {Containner } from './styles';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

/**************reduce */
import { logout } from '../../store/action/auth';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Header() {
      const [nome, setNome] = useState(localStorage.getItem('nome'));
      const [auth, setAuth] = useState('');
      const [user, setUser] = useState(localStorage.getItem('autenticado'))
      const token = localStorage.getItem('app-web');
      const { pathname } = useLocation();

      useEffect(()=>{
          if(user==='leitor'){
            setAuth('leitor');
            console.log(user)
          }else if(user ==='admin'){
            setAuth('admin');
            console.log(user)
          }else{
           Logout();
          }
        
      },[])
    const dispatch = useDispatch();
        const { isAuthenticated } =  useSelector(state=>state.auth);
        const Logout = ()=>{ 
            localStorage.removeItem('app-web');
            localStorage.removeItem('id');
            localStorage.removeItem('email');
            localStorage.removeItem('nome')
            localStorage.removeItem('autenticado');
            localStorage.removeItem("telefone");
            isAuthenticated && dispatch(logout())
        }
     
    return (
        <Containner>
            <div className="content">
            <div className="logo">
                <a href="/"><img src={logo} alt="Logo" height={80} width={80}/></a>
            </div>
           <ul>
               <div className="public">
                    <li><Link to="/livros" style={{ color: pathname === "/livros" ? "#b18336" : "#555" }} ><span><FaIcons.FaBook color="#0c854e" size={15}/></span>Todos os Livros</Link></li>
                    
                    {token? 
                       <li><Link to="/livros/monografias" style={{ color: pathname === "/livros/monografias" ? "#b18336" : "#555" }}><span><FaIcons.FaBookReader color="#0c854e" size={15}/></span>Todas as monofrafias</Link></li>: ""
                    }
                    </div>
               {token? 
               <>
                <div className="private">
                    <li><Link to="/favorito" style={{ color: pathname === "/favorito" ? "#b18336" : "#555" }} >Favoritos </Link></li>
                    { auth==='admin'?  <li><Link to="/registro-livros/categoria" style={{ color: pathname === "/registro" ? "#b18336" : "#555" }}>Registros</Link></li> : ''}
                    <li><Link to="/perfil" style={{ color: pathname === "/perfil" ? "#b18336" : "#555" }}>Perfil Meu</Link> </li>
               </div>
               </>:  ''
               }
               {
                   token? 
                   <>
                    <div className="login"> 
                        <li><Link to="/perfil" style={{ color: pathname === "/perfil" ? "#b18336" : "#555" }}><span><FiIcons.FiUser size={15}/> {nome&&nome.substr(0, 2)}</span><span></span></Link> </li>
                        <li onClick={()=>Logout()}><a href="#"><span><FiIcons.FiLogOut size={15}/></span><span>Sair</span></a> </li>
                  </div>
                   </>
                   :
                   <>
                    <div className="login">
                    <li><Link to="/login" style={{ color: pathname === "/login" ? "#b18336" : "#555" }}><span><FiIcons.FiLogIn size={15}/></span><span>Acessa</span></Link> </li>
                    </div>

               </>
               }
           </ul>
            </div>
            
        </Containner>
    )
}
