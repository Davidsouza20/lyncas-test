import React, { useState, useEffect } from "react";
import api from '../../services/api';
import './style.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';


function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
      async function fetchFavoriteBooks() {
        const favoriteBooks = await api.get('favorite');
        setFavoriteBooks(favoriteBooks.data);
      }
      
      fetchFavoriteBooks();
  }, [])

  async function handleDeleteFronFavorite(e, id, index) {
    e.preventDefault();
    confirmAlert({
      title: 'Remover dos Favoritos',
      message: 'Tem certeza que deseja remover este livro?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            const favorites = await api.delete(`favorite/${id}`);
            if (favorites.status === 200) {
              const tmpFavorites = [...favoriteBooks];
              tmpFavorites.splice(index, 1);
              setFavoriteBooks(tmpFavorites);
            } 
          }
        },
        {
          label: 'Não remover',
          onClick: () => {}
        }
      ]
    }); 
  }

  return (
    <div className="App container mt-5">
      <div className="header"> 
        <h2>Livros Favoritos</h2>
        <Link className='ml-3 btn btn-success' to='/'>
          Pesquisar Livros
        </Link>
      </div>
      
      <div className="cards">
        {favoriteBooks.map((book, i) => 
          <div key={i} className="card">
          <img 
            src={book.thumbnail} 
            className="card-img-top" 
            alt="Capa do Livro"
          />
            
          <div className="card-body">
            <p className="card-text">{book.title}</p>
            
            <button 
              className="btn btn-danger button" 
              onClick={e => handleDeleteFronFavorite(e, book._id, i)}
            >Remover dos Favoritos</button>

          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
