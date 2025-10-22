import React from 'react';
import './chat.css'

export function Chat({userName}) {
    let [chats, setChats] = React.useState(localStorage.getItem('chat') || []);


  return (
    <main className="container-fluid">
        <h1>ROC CHAT</h1>
        <p>real time messages will appear here: hoping the screen will load up with 10 most recent messages sent.</p>
        <div id="rocchat_spacing">
            <div className="blank"></div>
            <div id="rocchat">
                <div id="messages">
                    {chats.length >= 10 &&(
                        <div className="message"><div className= "Username">Name</div><p id="message 10">{chats[9].chat}</p></div>
                    )}
                    {chats.length >= 9 &&(
                        <div className="message"><div className= "Username">Name</div><p id="message 9">{chats[8].chat}</p></div>
                    )}
                    {chats.length >= 8 &&(
                        <div className="message"><div className= "Username">Name</div><p id="message 8">{chats[7].chat}</p></div>
                    )}
                    {chats.length >= 7 &&(
                        <div className="message"><div className= "Username">Name</div><p id="message 7">{chats[6].chat}</p></div>
                    )}
                    {chats.length >= 6 &&(
                        <div className="message"><div className= "Username">Name</div><p id="message 6">{chats[5].chat}</p></div>
                    )}
                    {chats.length >= 5 &&(
                        <div className="message"><div className= "Username">Name</div><p id="message 5">{chats[4].chat}</p></div>
                    )}
                    {chats.length >= 4 &&(
                        <div className="message"><div className= "Username">Name</div><p id="message 4">{chats[3].chat}</p></div>
                    )}
                    {chats.length >= 3 &&(
                        <div className="message"><div className= "Username">Name</div><p id="message 3">{chats[2].chat}</p></div>
                    )}
                    {chats.length >= 2 &&(
                        <div className="message"><div className= "Username">Name</div><p id="message 2">{chats[1].chat}</p></div>
                    )}
                    {chats.length >= 1 &&(
                        <div className="message"><div className= "Username">Name</div><p id="message 1">{chats[0].chat}</p></div>
                    )}
                </div>
                <form id="chat">
                    <div id="chatbar">
                        <input type="text" name="message" placeholder="go cougs!!" />
                    </div>
                    <div id="button">
                        <button type="submit">Send</button>
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