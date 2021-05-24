import React, { useEffect, useState } from 'react'
import { ContentSession, ContentCategoria } from './styles';
import Card_Book from '../../components/Card_Books';
import bainner from '../../assets/bainner.webp';
import * as FaIcons from 'react-icons/fa';
import CardRecBook from '../../components/CardRecBook/CardRecBook';
import { getAllCateory } from '../../services/ApiCategory';
import {
  getAllBooks,
} from "../../services/ApiBooks";
export default function Home() {
 const [livros, setLivros] = useState([]);
 useEffect(() => {
      getBooks();
  }, []);

 const getBooks = async () => {
    const books = await getAllBooks();
    setLivros(books);
  };
    return ( 
    <div style = {
            { position: 'relative', top: '60px', bottom: '60px' }
        } >
        <ContentSession >
        <Categoria titulo = "Encontre o seu conhecimento aqui" / >
        <Card_Book / >
        </ContentSession> 
        <ContentSession style = {
            {
                height:'300px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment:'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`
            }
        } >
       
        <div className = "bainner-titulo" >
            <h1 > Todos os dias você aprende uma coisa nova aqui no seu gabarito de conhecimento de monografias </h1> 
        </div > 
      </ContentSession>
        <ContentSession >
        {livros.length > 0 ? (
          livros.map((item, index) => {
          if(index >=10 && index <=13)
           return(
            <CardRecBook item={item} key={index}/>
          )})
        ) : (
          <h3
            style={{ borderTop: "1px solid #ddd", padding: 20, width: "100%" }}
          >
            Nenhum Livro disponivel de momento
          </h3>
        )}
      
        </ContentSession> 
        <ContentSession >
        <div style = {
            { height: '10px' }
        }> </div>
        </ContentSession >
        </div>
    )
}
const Categoria = ({ titulo, style }) => {
    const [categoria, setcategoria] = useState([]);
    useEffect(() => {
        getCategory();
    }, [])

    const getCategory = async() => {
        const category = await getAllCateory();
        setcategoria(category)
    }
    return (
        <>
        <ContentCategoria >
        <div className = "content" >
        <div className = "text-categoria"> <h2 style = {{ color: style ? '#fff' : '#000' }
        }> { titulo } </h2></div>
        <ul>
            {categoria.length > 0 && categoria.map((item, index) => ( <li > < a href = { `/livros/${item.categoria}/${item._id}` } > < span > < FaIcons.FaAngleRight/> </span>{item.categoria}</a> </li>))
        }
        </ul> 
        
        </div>

        </ContentCategoria> </>
    )
}