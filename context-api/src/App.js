import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App - Context Api</h1>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/products" element={<Products />}/>   
          </Routes>     
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
