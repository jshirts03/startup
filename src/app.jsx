import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Chat } from './chat/chat';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
        <div className="body">
            <header className="container-fluid">
                <nav>
                    <div id="link_holder">
                    <div id="links">
                    <NavLink className="nav_links" to="/">Home</NavLink>
                    <NavLink className="nav_links" to="about">About</NavLink>
                    <NavLink className="nav_links" to="chat">Chat</NavLink>
                    </div>
                    </div>

                    <div id="logo">
                        <img src="images/comsohat.png"/>
                        <h1 id="title">Virtual ROC</h1>
                        <img src="images/comsohat.png"/>
                    </div>
                    <div id="blank">
                        <p></p>
                    </div>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/chat' element={<Chat />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />  
            </Routes>

            <footer>
                <div id="footer_note">
                    <p>First website made by Jonah Shirts</p>
                </div>
                <div id="github">
                    <a href="https://github.com/jshirts03/startup">Github</a>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}