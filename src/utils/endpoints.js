const URL_BASE = "http://localhost/api";

const URL_REGISTER = `${URL_BASE}/usuario`;
const URL_access = `${URL_BASE}/auth`;

const URL_Books_Register = `${URL_BASE}/livro`;
const URL_update_Book = `${URL_BASE}/livro-update/`;
const URL_delete_Book = `${URL_BASE}/livro-delete`;
const URL_BookFavoriting = `${URL_BASE}/favorito`;

const URL_documents = `${URL_BASE}/up-document`;
const URL_U_document = `${URL_BASE}/up-document`;

const URL_Books_Category = `${URL_BASE}/categoria`;
const URL_update_Category = `${URL_BASE}/categoria-update/`;
const URL_delete_Category = `${URL_BASE}/categoria-delete`;

const URL_Autor= `${URL_BASE}/autor`;
export {
    URL_REGISTER,
    URL_access,
    URL_Books_Register,
    URL_Books_Category,
    URL_update_Category,
    URL_delete_Category,
    URL_Autor,
    URL_documents,
    URL_BookFavoriting
}