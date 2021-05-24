import React,{useState} from 'react'
import {ContentSession, Content, CardForm, CardMenu} from './styles';
import bainner from '../../assets/bainner.webp';

import Input from '../../components/Input';
import Button from '../../components/Button';
import SideBar from '../../components/SideBar';
//import { getAllCateory } from '../../services/ApiCategory';

export default function Perfil() {
     const [nome, setNome] = useState(localStorage.getItem('nome'));
      const [email, setEmail] = useState(localStorage.getItem('email'));
      const [telefone, setTelefone] = useState(localStorage.getItem('telefone'));

    return (
        <div style={{position:'relative', top:'60px', bottom:'60px'}}>
             <ContentSession style={{
                  backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`}}>
                     <div className="bainner-titulo">
                         <h1>Perfil Usuário</h1>
                     </div>
             </ContentSession>
             <ContentSession style={{
                  backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: '#fff'}}>
                     <Content>
                           <CardMenu className="menu">
                               <SideBar/>
                           </CardMenu>
                            <CardForm>
                               <div className="reader-top">
                                   <h2>Perfil público</h2>
                                   <span>Actualize as suas informações</span>
                               </div>
                               <div>
                                
                                  
                                   <form>
                                       <Input type="text" name="nome" value={nome && nome} placeholder="Seu nome completo"/>
                                       <Input type="email" name="email" value={email&& email} placeholder="Seu nome email"/>
                                       <Input type="telefone" name="telefone" value={telefone&&telefone} placeholder="Seu nome Telefone"/>
                                      <div className="btn-up">
                                            <Button value="Actualizar"/>
                                      </div>
                                   </form>
                               </div>
                            </CardForm>
                        </Content>
             </ContentSession>
        </div>
    )
}