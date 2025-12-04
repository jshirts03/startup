import React from 'react';
import './chat.css'

export function Chat() {
    let [chats, setChats] = React.useState([]);
    let [message, setMessage] = React.useState();
    let [sent, setSent] = React.useState(0)
    
// Initially gets the user chat count, and the 10 most recent chats
    React.useEffect(() => {
        getChats();
        updateSent();
    }, [])



//Function that sends request to server to get the number of items sent (includes cookies so server knows the user info)
    async function updateSent() {
        const number = await fetch('api/get/sent', {
            credentials: "include",
        })
        const parsed_number = await number.json()
        setSent(parsed_number.sent);
    }


//Gets the most recent chats from the backend server (DB). ONLY CALLED ONCE AT THE BEGINNING TO DISPLAY HISTORY 
    async function getChats(){
        const chats = await fetch ('api/chats', {
            credentials: "include",
        });
        const parsed_chats = await chats.json();
        setChats(parsed_chats);
    }




//FRONT END   set up a websocket connection to my backend websocket. 2 event handlers: onmessage and 

    let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        socket.onopen = (event) => {
         //Send a message into the chat titled "Username, joined"
        };
        this.socket.onclose = (event) => {
         //Send a message into the chat titled "Username, left"
        };
        this.socket.onmessage = async (msg) => {
        try {
            //turn message into readable elements
            //then set chats to include message as the first element of the array
        } catch {}
        };




//Sends that message to the DB to be stored in chat history, updates the sent counter
    async function sendMessage(userName, message){
        let chat = {name: userName, message: message}
        await fetch('api/send', {
            method: 'post',
            body: JSON.stringify(chat),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            credentials: "include",
        });
        //instead of getting from the DB/server, I'll just add this to my local chats and send a websocket message to all the other groups in the same way, but update the DB
        await updateSent();
        //says that if the chats was greater than or equal to 10 mesages, it will slice it into only its first 10 elements (like trimmed = chats[:9])
        //setChats((prevChats) => {const trimmed = prevChats.length >= 10 ? prevChats.slice(0, 9) : prevChats; return [chat, ...trimmed];});
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
                        <button type="submit" onClick={(e) => {e.preventDefault(); sendMessage(localStorage.getItem("userName"), message);}}>Send</button>
                    </div>
                </form>
            </div>
            <div className="blank"></div>
        </div>
        <div>
            <p>Messages sent: {sent} </p>
        </div>
    </main>
  );
}