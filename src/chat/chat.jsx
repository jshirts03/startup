import React from 'react';
import './chat.css'

export function Chat() {
    let [chats, setChats] = React.useState(JSON.parse(localStorage.getItem("chat")) || []);
    let [message, setMessage] = React.useState();

    React.useEffect(() => localStorage.setItem("chat", JSON.stringify(chats)), [chats]);


    function sendMessage(message){
        let userName = localStorage.getItem("userName")
        let chat = {name: userName, message: message}
        if (chats.length === 10){
            chats.pop()
        }
        setChats((chats) => [chat, ...chats])
        localStorage.setItem("chat", JSON.stringify(chats))
    }

  return (
    <main className="container-fluid">
        <h1>ROC CHAT</h1>
        <p>real time messages will appear here: hoping the screen will load up with 10 most recent messages sent.</p>
        <div id="rocchat_spacing">
            <div className="blank"></div>
            <div id="rocchat">
                <div id="messages">
                    {chats.length >= 10 &&(
                        <div className="message"><div className= "Username">{chats[9].name}</div><p id="message 10">{chats[9].message}</p></div>
                    )}
                    {chats.length >= 9 &&(
                        <div className="message"><div className= "Username">{chats[8].name}</div><p id="message 9">{chats[8].message}</p></div>
                    )}
                    {chats.length >= 8 &&(
                        <div className="message"><div className= "Username">{chats[7].name}</div><p id="message 8">{chats[7].message}</p></div>
                    )}
                    {chats.length >= 7 &&(
                        <div className="message"><div className= "Username">{chats[6].name}</div><p id="message 7">{chats[6].message}</p></div>
                    )}
                    {chats.length >= 6 &&(
                        <div className="message"><div className= "Username">{chats[5].name}</div><p id="message 6">{chats[5].message}</p></div>
                    )}
                    {chats.length >= 5 &&(
                        <div className="message"><div className= "Username">{chats[4].name}</div><p id="message 5">{chats[4].message}</p></div>
                    )}
                    {chats.length >= 4 &&(
                        <div className="message"><div className= "Username">{chats[3].name}</div><p id="message 4">{chats[3].message}</p></div>
                    )}
                    {chats.length >= 3 &&(
                        <div className="message"><div className= "Username">{chats[2].name}</div><p id="message 3">{chats[2].message}</p></div>
                    )}
                    {chats.length >= 2 &&(
                        <div className="message"><div className= "Username">{chats[1].name}</div><p id="message 2">{chats[1].message}</p></div>
                    )}
                    {chats.length >= 1 &&(
                        <div className="message"><div className= "Username">{chats[0].name}</div><p id="message 1">{chats[0].message}</p></div>
                    )}
                </div>
                <form id="chat">
                    <div id="chatbar">
                        <input type="text" name="message" placeholder="go cougs!!" onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <div id="button">
                        <button type="submit" onClick={(e) => {e.preventDefault(); sendMessage(message);}}>Send</button>
                    </div>
                </form>
            </div>
            <div className="blank"></div>
        </div>
        <div>
            <p>Messages sent: number (This will be recalled from memory and added to every time a message is sent)</p>
        </div>
    </main>
  );
}