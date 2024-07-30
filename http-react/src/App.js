import './App.css';

import { useState, useEffect } from 'react';

import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {

  const [products, setProducts] = useState([]);

  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // add products
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { id, name, price }; 

    if(editing) {  
      await httpConfig(product, "PUT", id);
    } else {
      await httpConfig(product, "POST");
    }

    setId(null);
    setName('');
    setPrice('');
    setEditing(false);
    setEditId(null);
  }

  const loadProduct = (product) => {
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setEditing(true);
    setEditId(product.id);
  }

  const handleDelete = async (id) => {    
    httpConfig(id, "DELETE");
  }

  useEffect(() => {
    setProducts(items);
  }, [items]);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
      <ul>
        {items && items.map(product => 
          <li key={product.id}>
            {product.name}- <b>R$</b> {product.price}
            <button onClick={() => loadProduct(product)}>Editar</button>
            <button onClick={() => handleDelete(product.id)}>Deletar</button>
          </li>)
        }
      </ul>
      )}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>Nome do Produto
          <input 
            type='text' 
            value={name} 
            onChange={(e) => setName(e.target.value)} />
          </label>
          <label>Preço
          <input 
            type='number' 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} />
          </label>

          {loading && (
            <button type='submit' disabled>Aguarde ... </button>
          )}

          {!loading && (
            <button type='submit'>{editing ? 'Editar' : 'Adicionar'}</button>
          )}

        </form>
      </div>

    </div>
  );
}

export default App;
