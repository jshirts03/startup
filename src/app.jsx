import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  <div className="body">
    <header className="container-fluid">
        <nav>
            <div id="link_holder">
            <div id="links">
            <a className="nav_links" href="index.html">Home</a>
            <a className="nav_links" href="about_roc.html">About</a>
            <a className="nav_links" href="chat.html">Chat</a>
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

    <main><div>App stuff goes here</div></main>

    <footer>
        <div id="footer_note">
            <p>First website made by Jonah Shirts</p>
        </div>
        <div id="github">
            <a href="https://github.com/jshirts03/startup">Github</a>
        </div>
    </footer>
  </div>
  );
}