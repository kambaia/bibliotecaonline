// @flow
import React,{useState, useContext} from 'react';
export const AuthContext = React.createContext({});
export const AuthProvider = (props)=>{
    const [user, setUser] = useState({}); 
    const [formMenu, setformMenu] = useState(''); 
    const [livros, setLivros] = useState([]);
    const [livro, setLivro] = useState({}); 
    const [categoria, setcategoria] = useState([]); 
    const [form, setForm] = useState({}); 

    return(
        <AuthContext.Provider value={{
            user, livros,livro, setLivro,
             setLivros, setUser, form, 
             setForm, setcategoria, categoria,
             formMenu, setformMenu}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=>useContext(AuthContext);
export const CategoryAuth = ()=>useContext(AuthContext);
export const BooksAuth = ()=>useContext(AuthContext);
export const BookAuth = ()=>useContext(AuthContext);
export const FormAuth = ()=>useContext(AuthContext);
export const FormMenu = ()=>useContext(AuthContext);

