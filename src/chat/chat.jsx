import React from 'react';
import './chat.css'

export function Chat() {
  return (
    <main className="container-fluid">
        <h1>ROC CHAT</h1>
        <p>real time messages will appear here: hoping the screen will load up with 10 most recent messages sent.</p>
        <div id="rocchat_spacing">
            <div className="blank"></div>
            <div id="rocchat">
                <div id="messages">
                    <div className="message"><div className= "Username">Name</div><p id="message 10">chatline10</p></div>
                    <div className="message"><div className= "Username">Name</div><p id="message 9">chatline9</p></div>
                    <div className="message"><div className= "Username">Name</div><p id="message 8">chatline8</p></div>
                    <div className="message"><div className= "Username">Name</div><p id="message 7">chatline7</p></div>
                    <div className="message"><div className= "Username">Name</div><p id="message 6">chatline6</p></div>
                    <div className="message"><div className= "Username">Name</div><p id="message 5">chatline5</p></div>
                    <div className="message"><div className= "Username">Name</div><p id="message 4">chatline4</p></div>
                    <div className="message"><div className= "Username">Name</div><p id="message 3">chatline3</p></div>
                    <div className="message"><div className= "Username">Name</div><p id="message 2">chatline2</p></div>
                    <div className="message"><div className= "Username">Name</div><p id="message 1">chatline1</p></div>
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