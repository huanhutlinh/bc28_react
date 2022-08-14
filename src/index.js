import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//Cấu hình react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ReactForm from './pages/ReactForm/ReactForm';
import Page404 from './pages/Page404/Page404';
import ReactLifecycle from './pages/ReactLifecycle/ReactLifecycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='' element={<App />}>
                <Route index element={<Home />}></Route>
                {/* <Route path='' element={<Home />}></Route> */}
                <Route path='contact' element={<Contact />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='reactform' element={<ReactForm />}></Route>
                <Route path='lifecycle' element={<ReactLifecycle />}></Route>
                {/* <Route path='*' element={<Page404 /> }></Route> */}
                <Route path='*' element={<Navigate to="" /> }></Route>

            </Route>
            {/* <Route path='contact' element={<Contact />}>

            </Route> */}
        </Routes>
    </BrowserRouter>
);
//jsx 

