import React,{useState, useEffect} from 'react';
import logo from '../../assets/logo.png';
import {Containner } from './styles';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

/**************reduce */
import { logout } from '../../store/action/auth';
import { useDispatch, useSelector} from 'react-redux';


export default function Header() {
      const [nome, setNome] = useState(localStorage.getItem('nome'));
      const [auth, setAuth] = useState('');
      const [user, setUser] = useState(localStorage.getItem('autenticado'))
      const token = localStorage.getItem('app-web');
      
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
                    <li><a href="/recomendo"><span><FaIcons.FaBook color="#0c854e" size={15}/></span>Livros recomendados</a></li>
                    <li><a href="/livros"><span><FaIcons.FaBookReader color="#0c854e" size={15}/></span>Todas as monofrafias</a></li>
               </div>
               {token? 
               <>
                <div className="private">
                    <li><a href="/favorito">Favoritos </a></li>
                    { auth==='admin'?  <li><a href="/registro">Registros</a></li> : ''}
                    <li><a href="/perfil">Perfil</a> </li>
               </div>
               </>:  ''
               }
               {
                   token? 
                   <>
                    <div className="login"> 
                        <li><a href="/perfil"><span><FiIcons.FiUser size={15}/> {nome&&nome.substr(0, 2)}</span><span></span></a> </li>
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
