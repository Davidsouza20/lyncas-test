import React, { useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function handleSearch(e) {
    e.preventDefault();
    const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(searchTerm)}`);
    const data = await books.json();
    if(data.totalItems === 0) {
      alert('Nenhum Livro encontrado!')
      setSearchTerm('');
      return;
    }
    setBooks(data.items);
  }

  async function handleAddFavorite(e, book_id, title, thumbnail) {
    e.preventDefault();
    const payload = {
      "book_id": book_id,
      "title": title,
      "thumbnail": thumbnail
    };
    const book = await api.post('favorite', payload);
    if(book.status === 200) {
      alert('Livro adicionado aos favoritos');
    }
  }

  return (
    <div className="App container mt-5">
      <h2>Pesquisar um Livro</h2>
      <div className="form-inline mb-5">
        <input 
          type="text" 
          className="form-control" 
          id="search" 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} 
        ></input>
        <button className="btn btn-dark" onClick={handleSearch}>Buscar</button>

        <Link className='ml-3 btn btn-success' to='/favoritos'>
          Ir para Favoritos
        </Link>
      </div>
       
      <div className="cards">
        {books.map((book, i) => 
        <div key={i} className="card">
          <img 
            src={book.volumeInfo.imageLinks === undefined 
            ? "https://cdn.pixabay.com/photo/2017/11/03/22/49/book-stack-2915933_960_720.jpg" 
            : `${book.volumeInfo.imageLinks.thumbnail}`} 
            className="card-img-top" 
            alt="Capa do Livro"
          />
            
          <div className="card-body">
            <p className="card-text">{book.volumeInfo.title}</p>
            
            <button 
              className="btn btn-dark" 
              onClick={e => handleAddFavorite(
                e, 
                book.id,
                book.volumeInfo.title,
                book.volumeInfo.imageLinks === undefined 
                ? "https://cdn.pixabay.com/photo/2017/11/03/22/49/book-stack-2915933_960_720.jpg" 
                : `${book.volumeInfo.imageLinks.thumbnail}`
              )}
              
            >Adicionar aos favoritos</button>

          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
