import React, {useEffect, useState} from 'react'
import {ContentSession, CardBooks} from './styles';
import bainner from '../../assets/bainner.webp';

import { getOnlyBooks } from '../../services/ApiBooks';
import * as FaIcons from 'react-icons/fa';
import { useParams } from 'react-router-dom';

export default function Documents() {
  
    return (
        <div style={{position:'relative', top:'60px', bottom:'60px'}}>
             <ContentSession style={{
                  backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`}}>
                    display: 'flex',
                     <div className="bainner-titulo">
                        <h1>Detalhes do livro</h1>
                     </div>
             </ContentSession>

             <ContentSession style={{
                    width:'98%',
                    margin:'auto',
                    display:'flex',
                    flexWrap:'wrap',
                    marginBottom:'100px'
                  }}>
             <CardBooxList/>
             <div className="publicidades">
                        <h2>Área para públicidades</h2>
                     </div>
             </ContentSession>

        </div>

    )
}


const CardBooxList = ()=>{
    const [livro, setLivro]  = useState({});
    const [doc, setDoc]  = useState('');
    const [categoria, setCategoria]  = useState('');
    const [autor, setAutot]  = useState('');
    const { id } = useParams();
    useEffect(() => {
        getBooks(id);
    }, [])

    const getBooks=async (id)=>{
        const book = await getOnlyBooks(id);
        const { documento_url }= book.documento && book.documento;
        const { nome }= book.autor && book.autor;
        const { categoria }= book.categoria && book.categoria;
        setDoc(documento_url);
        setAutot(nome);
        setCategoria(categoria);
        setLivro(book);
    }
    return(
        <>
           {livro&&(
               <CardBooks>
               <a href={`/livros/${livro._id}`}>
                   <div className="card-body-book">
                    <div className="disc">
                            <div className="card-capa">
                            <img src={livro.capa_ul}/>
                            </div>
                            <div className="card-desc">
                                <span><strong>Titulo</strong>{livro.titulo}</span>
                                <span><strong>Autor</strong>{autor}</span>
                                <span><strong>Instituicao</strong>{livro.numero_pagina}</span>
                                <span><strong>Tipo</strong>{livro.ano}</span>
                                <span><strong>Ano</strong>{livro.instituicao}</span>
                                <span><strong>Tipo</strong>{livro.formato}</span>
                                <span><strong>Formato</strong>{livro.licenca}</span>
                                <span><strong>Licença</strong>{categoria}</span>
                            </div>
                    </div>
                    <div className="dist-text">
                             <div>
                             <strong>Descrição</strong>
                             </div>
                            <span>{livro.Descricao}</span>
                    </div>
                   </div>
                   
                 
                <div className="rodape">
                    <ul>
                        <li><a href=""><span><FaIcons.FaFacebookF/></span></a></li>
                        <li><a href=""><span><FaIcons.FaYoutube/></span></a></li>
                    </ul>
                    <div className="baixar">
                       <span><a target="_blank" href={doc}><span><FaIcons.FaDownload/></span><span>Baixar agora</span></a></span>
                    </div>
                </div>
                </a>
           </CardBooks>
           )}
        </>
    )
}