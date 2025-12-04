class SocketGen {

    constructor () {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            let message = {name: userName, message: "JOINED"}
            socket.send(JSON.stringify(message))
            setStatus("connected")
        };
        this.socket.onclose = (event) => {
        //Send a message into the chat titled "Username, left"
            setStatus("disconnected")
        };
        this.socket.onmessage = async (msg) => {
        try {
            //turn message into readable elements
            //then set chats to include message as the first element of the array
            message = JSON.parse(msg.data)
            setChats((prevChats) => {const trimmed = prevChats.length >= 10 ? prevChats.slice(0, 9) : prevChats; return [chat, ...trimmed];})
        } catch {}
        };
    }
}