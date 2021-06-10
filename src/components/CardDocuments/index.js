import React, {useEffect, useState} from 'react'
import {ContentSession, CardBooks} from './styles';
import bainner from '../../assets/bainner.webp';
import { getAllBooks } from '../../services/ApiBooks';
import * as FaIcons from 'react-icons/fa';
import { BooksAuth } from '../../providers/auth';


export default function CardDocuments() {
    const {livros, setLivros }   = useState([]);
    useEffect(() => {
        getBooks();
    }, [])

    const getBooks=async ()=>{
        const books = await getAllBooks();
        setLivros(books);
    }
    return (
        <div style={{position:'relative', top:'60px', bottom:'60px'}}>
             <ContentSession style={{
                  backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`}}>
                   
                     <div className="bainner-titulo">
                        <div className="pesquisar">
                            <input placeholder="Buscar por um livro, Ex: A fitoria de estudar"/>
                            <button>Pesquisar</button>
                            </div>
                        
                     </div>
             </ContentSession>

             <ContentSession style={{
                    width:'98%',
                    margin:'auto',
                    display:'flex',
                    flexWrap:'wrap',
                    marginBottom:'100px'
                  }}>
                   
                    
             <div style={{width:'100%'}}> <h2>Todos Livros a sua disposição</h2></div>
             {livros && livros.map((item, index)=>(
            
                    <CardBooxList item={item} key={index}/>
                   
             ))}
            
             </ContentSession>

        </div>

    )
}

const CardBooxList = ({ item })=>{
    return(
        <>
           <CardBooks>
               <a href={`/livros/${item._id}`}>
                <div className="card-capa">
                    <img src={item.capa_ul}/>
                </div>
                <div className="card-desc">
                  <span>{item.tema}</span>
                </div>

                <div className="rodape">
                    <ul>
                        <li><a href=""><span><FaIcons.FaFacebookF/></span></a></li>
                        <li><a href=""><span><FaIcons.FaYoutube/></span></a></li>
                    </ul>
                    <div className="baixar">
                       <span><a target="_blank" href={item.documento.documento_url}><span><FaIcons.FaDownload/></span></a></span>
                    </div>
                </div>
                </a>
           </CardBooks>
        </>
    )
}