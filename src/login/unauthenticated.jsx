import React from "react";
import { useNavigate } from "react-router-dom";


export function Unauthenticated({userName, onLogin}) {
    const [loginUsername, setLoginUsername] = React.useState('');
    const [loginPassword, setLoginPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState("");
    let navigate = useNavigate();

    async function Login(){
        loginOrCreate(`/api/auth/login`);
    }

    async function CreateUser(){
        loginOrCreate(`api/auth/create`);
    }

    async function loginOrCreate(request){
        const response = await fetch(request, {
            method: 'post',
            body: JSON.stringify({email: loginUsername, password: loginPassword} ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', loginUsername);
            onLogin(loginUsername);
            setErrorMessage("")
            navigate('/chat');
        }
        else{
            const error = await response.json();
            setErrorMessage(`Error! ${error.msg}`);
        }
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
                    <span>Password</span> <input type="password" onChange={(e) => {setLoginPassword(e.target.value)}} placeholder="your password here" />
                </div>
                <div id="error">
                    <p>{errorMessage}</p>
                </div>
                <div id="buttons">
                    <button type="submit" onClick={() => Login()} disabled={!loginUsername || !loginPassword}>Login</button>
                    <button type="submit" onClick={() => CreateUser()} disabled={!loginUsername || !loginPassword}>Create</button>
                </div>
        </div>
        </div>
        <div id="login_blank">
            <p></p>
        </div>
    </main>
  );
}