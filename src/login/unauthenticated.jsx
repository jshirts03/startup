import React from "react";
import { useNavigate } from "react-router-dom";


export function Unauthenticated(userName, onLogin) {
    const [loginUsername, setLoginUsername] = React.useState('');
    const [loginPassword, setLoginPassword] = React.useState('');
    let navigate = useNavigate();

    async function Login(){
        localStorage.setItem('userName', loginUsername);
        onLogin(loginUsername);
        navigate('/chat');
    }

    async function CreateUser(){
        localStorage.setItem('userName', loginUsername);
        onLogin(loginUsername);
        navigate('/chat');
    }

    return (
    <main className="container-fluid">
        <div id="login_blank">
            <p></p>
        </div>
        <div id="login">
        <div className="form">
                <div id="login_here">
                    <h2>Login Here</h2>
                </div>
                <div id="username">
                    <span id="email_label">Email</span><input type="text" onChange={(e) => {setLoginUsername(e.target.value)}}placeholder="your email here" />
                </div>
                <div id="password">
                    <span>Password</span> <input type="text" onChange={(e) => {setLoginPassword(e.target.value)}} placeholder="your password here" />
                </div>
                <div id="buttons">
                    <button type="submit" onClick={() => Login()}>Login</button>
                    <button type="submit">Create</button>
                </div>
        </div>
        </div>
        <div id="login_blank">
            <p></p>
        </div>
    </main>
  );
}