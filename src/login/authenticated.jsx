import React from 'react';
import { useNavigate } from 'react-router-dom';


export function Authenticated(userName, onLogout){
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userName');
        onLogout();
    }

    return(
        <div>
            <button class= "chat" onClick={() => navigate('/chat')}>
                CHAT
            </button>
            <button class= "logout" onClick={() => logout()}>
                LOGOUT
            </button>
        </div>
    )

}