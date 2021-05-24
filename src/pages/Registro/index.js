import React, { useState } from 'react'
import Input from '../../components/Input';
import { Form} from './styles';

import * as BIIcons from 'react-icons/bi';

import Button from '../../components/Button';
import { SignUpUser} from '../../services/ApiUsers';

export default function Registro() {
    const [form, setForm]= useState({});
    const  onSubmit = async (e) => {
        e.preventDefault();
        const result = await SignUpUser(form);
        setForm({nome:'', email:'',  senha:'', telefone:''})

    }
    const onChange = (e)=>{
        e.preventDefault();
        const { name, value } = e.target;
		setForm({ ...form, [name]: value});
    }
    return (
        <Form style={{textAlign:'center'}}>
            <div className="text-registro"><h2>Cria uma conta e adiciona os seus melhores livros</h2></div>
            <form onSubmit={onSubmit}>
                <Input placeholder="Nome Completo" type="text" value={form.nome}  name={'nome'} onchange={onChange}/>
                <Input placeholder="Telefone" type="text" value={form.telefone}  name={'telefone'} onchange={onChange}/>
                <Input placeholder="E-email" type="text" value={form.email}  name={'email'} onchange={onChange}/>
                <Input placeholder="Nº de matricula" type="text" value={form.numero_m}  name={'numero_m'} onchange={onChange}/>
                <Input placeholder="senha" type="password" value={form.senha}  name={'senha'} onchange={onChange}/>
                <Input placeholder="" type="date" value={form.datacadastro}  name={'datacadastro'} onchange={onChange}/>
            </form>
        <div className="f-registro">
        Já tens uma conta? <a href='/login'>click aqui </a>
            <div className="btn-registro">
                <Button onClick={onSubmit} value={"Registro"}><span><BIIcons.BiLogIn/></span></Button>
            </div>
             
        </div>

    </Form>
    )
}
