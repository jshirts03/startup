import React from "react";
import { Navigate } from "react-router-dom";


export function Unauthenticated(userName, onLogin) {
    [loginUsername, setLoginUsername] = React.useState('')
    [loginPassword, setLoginPassword] = React.useState('')

    async function Login(){
        localStorage.setItem('userName', loginUsername);
        onLogin(loginUsername);
        Navigate('/play')
    }

    async function CreateUser(){
        localStorage.setItem('userName', loginUsername);
        onLogin(loginUsername);
        Navigate('/play')
    }

    return (
    <main className="container-fluid">
        <div id="login_blank">
            <p></p>
        </div>
        <div id="login">
        <form method="get" action="chat.html">
                <div id="login_here">
                    <h2>Login Here</h2>
                </div>
                <div id="username">
                    <spa id="email_label">Email</spa><input type="text" onChange={(e) => {setLoginUsername(e.target.value)}}placeholder="your email here" />
                </div>
                <div id="password">
                    <spa>Password</spa> <input type="text" onChange={(e) => {setLoginPassword(e.target.value)}} placeholder="your password here" />
                </div>
                <div id="buttons">
                    <button type="submit" onClick={() => Login()}>Login</button>
                    <button type="submit">Create</button>
                </div>
        </form>
        </div>
        <div id="login_blank">
            <p></p>
        </div>
    </main>
  );
}