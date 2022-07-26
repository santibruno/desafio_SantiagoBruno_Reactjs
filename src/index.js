import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Categoria from './views/Categorias';
import Contacto from './views/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import PregFrecuentes from './views/PregFrecuentes';
import Ayuda from './views/Ayuda';
import FilterCategory from './views/FilterCategory';
import Cart from './views/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />}></Route>
                <Route path="products/:id" element={<Detail />}></Route>
                <Route path="products/category/:id" element={<FilterCategory />}></Route>

                <Route path="cart" element={<Cart/>}></Route>
                <Route path="PregFrecuentes" element={<PregFrecuentes />}></Route>
                <Route path="Ayuda" element={<Ayuda />}></Route>
                <Route path="/categorias" element={<Categoria />}></Route>
                <Route path="contacto" element={<Contacto />}></Route>
                <Route path="*" element={
                    <div>
                        <h2>Pagina no encontrada :(</h2>
                    </div>}></Route>
            </Route>
        </Routes>


    </BrowserRouter>

);