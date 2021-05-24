import React, {useEffect, useState} from 'react'
import {ContentSession, CardBooks} from './styles';
import bainner from '../../assets/bainner.webp';
import { allFavorite } from '../../services/ApiBooks';
import * as FaIcons from 'react-icons/fa';
import { useParams } from 'react-router-dom';

export default function LivrosFavorito() {
    const [livros, setLivros ]   = useState([]);
    const [id_user, setid_user] = useState(localStorage.getItem('id'));
    useEffect(() => {
        getBooks(id_user);
    }, [])

    const getBooks=async (id)=>{
        const books = await allFavorite(id);
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
                            <button><FaIcons.FaSearch/></button>
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
                   
             {livros.length > 0 ?
             livros.map((item, index)=>(
                    <CardBooxList item={item} key={index}/> 
             )):  <h3 style={{borderTop: '1px solid #ddd', padding:20, width:'100%'}}>Nenhum Livro disponivel de momento</h3>}
             
             </ContentSession>
        </div>

    )
}

const CardBooxList = ({ item })=>{
   
    return(
        <>
       
        {
            item.favorito==='activo'? <CardBooks>
            <a href={`/livros/${item._id}`}>
             <div className="card-capa">
                 <img src={item.capa_ul}/>
             </div>
             <div className="card-desc">
               <span>{item.titulo}</span>
             </div>

             <div className="rodape">
                 <ul>
                     <li><a href=""><span><FaIcons.FaFacebookF/></span></a></li>
                     <li><a href=""><span><FaIcons.FaYoutube/></span></a></li>
                     {localStorage.getItem('app-web')? <li><a href=""><span>Favoritar</span></a></li>: ''}
                 </ul>
                 <div className="baixar">
                    <span><a target="_blank" href={item.documento.documento_url}><span>Ler</span></a></span>
                 </div>
             </div>
             </a>
        </CardBooks>:
       ''
        }
        </>
    )
}