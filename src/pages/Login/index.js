import React, { useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as BIIcons from 'react-icons/bi';
import bainner from '../../assets/bainner.webp';
import { Containner, CardLogin,Form, FormLogin} from './styles';
import { FormAuth, UserAuth } from '../../providers/auth';
import { SigInUser } from '../../services/ApiUsers';
import Registro from '../Registro';
import Input from '../../components/Input';
import Button from '../../components/Button';
import sweetalert from 'sweetalert';

export default function Login() {
    const [acesso, setAcesso] = useState(true);
    //const { user, setUser} = UserAuth()
    return (
        <Containner>
           <CardLogin style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`}}>
                  <div className="eslog">
                      <h1>Desfruto dos melhores livros!</h1>
                      <span>A sua conta e desfrute dos melhres livros, angolanos, brasileiros, grandes univerdades, escritórios nacionais, e muito mais.</span>
                  </div>
               <Form>
                     <div className="btn-acesso">
                        <button onClick={()=>setAcesso(true)}><span><FaIcons.FaLock color="#ddd"/></span><span style={{marginLeft:10}}>Leitores</span></button>
                        <button onClick={()=>setAcesso(false)}><span><FaIcons.FaLock color="#ddd"/></span><span style={{marginLeft:10}}>Registrar</span></button>
                    </div>
                  
                 { acesso? <> <LoginForm>
 
                   </LoginForm></>:
                   <>
                       <Registro>
                        </Registro>
                   </> }
                   
               </Form>
           </CardLogin>
        </Containner>
    )
}
export const LoginForm = ()=>{
    const {form, setForm } = FormAuth();
    const {user, setUser} = UserAuth();
	const  onSubmit = async (e) => {
        e.preventDefault();
       if(form.email===""){
        sweetalert({
            title:"Confirmação de inserção",
            text: "Entroduza o seu email",
            icon:'error',
            timer:4000
           
        })
        return  console.log("Entroduza o seu email")
       }
       if(form.senha===""){
        sweetalert({
            title:"Confirmação de inserção",
            text: "Introduza uma palavra-passe",
            icon:'error',
            timer:4000
           
        })
         return console.log("Introduza uma palavra-passe")
        }else{
            const  result = await SigInUser(form);
            const { usuario } = result;
            setUser(usuario);
            setForm({ email: '', senha:'' });
        }
	}
    const onChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value});
	}
    return(
        <FormLogin style={{textAlign:'center'}}>
            <div className="text-registro"><h2>Cria uma conta e adiciona os seus melhores livros</h2></div>
            <form onSubmit={onSubmit}>
                <Input placeholder="E-email" type="text" value={form.email}  name={'email'} onchange={onChange}/>
                <Input placeholder="Palavra Pass" type="password" value={form.senha}  name={'senha'} onchange={onChange}/>
            </form>
        <div className="f-login">
            <a></a>
            <div className="btn-login">
            <Button onClick={onSubmit} value={"Acessar"}><span><BIIcons.BiLogIn color="#fff"/></span></Button>
            </div>
        </div>
     </FormLogin>
    );
}