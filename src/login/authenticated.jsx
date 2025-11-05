import React from 'react';
import { useNavigate } from 'react-router-dom';


export function Authenticated({userName, onLogout}){
    const navigate = useNavigate();

    async function logout() {
        await fetch(`api/auth/logout`, {
            method: "delete",
        })
        .catch(() => {
            //something wrong, don't do anything rn
        })
        .finally(() => {
        localStorage.removeItem('userName');
        localStorage.removeItem('sent')
        onLogout();
        });
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