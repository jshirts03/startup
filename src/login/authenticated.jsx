import React from 'react';
import { useNavigate } from 'react-router-dom';


export function Authenticated({userName, onLogout}){
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userName');
        onLogout();
    }

    return(
        <main>
            <div className="form">
            <button className= "chat" onClick={() => navigate('/chat')}>
                CHAT
            </button>
            <button className= "logout" onClick={() => logout()}>
                LOGOUT
            </button>
            </div>
        </main>
    )

}