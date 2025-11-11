const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

//gonna store the users and the last 10 messages in the server now instead of local storage
let users = [];
let chats = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json())
app.use(express.static('public'));
app.use(cookieParser());

//This basically takes any requests that start with /api and send them to the apiRouter. That way we don't have to repeatedly type "/api"
var apiRouter = express.Router();
app.use("/api", apiRouter);

//When creating a new user, if there's already a user then it will send back an error, else it will create a new user and create a cookie with that user's token
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)){
        res.status(409).send({msg: "Existing user"});
    }
    else{
        const user = await createUser(req.body.email, req.body.password);

        setAuthCookie(res, user.token);
        res.send({email: user.email});
    }
});

//Looks up the user by email in our array of users. Hashes the password and compares to the hashed password on file. If they match, create a new token and send back a cookie with that token
apiRouter.post('/auth/login', async (req,res) => {
    const user = await findUser('email', req.body.email);
    if (user){
        if (await bcrypt.compare(req.body.password, user.password)){
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({email: user.email});
            return;
        }
    }
    res.status(409).send({msg: "User not found"});
});

//removes the token cookie from the browser, causing the user to no longer be able to access any functions that require being logged in (verify middleware below)
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

//Middleware that allows you to check and see if a user is logged in (aka has a token stored in cookies) we don't use app.use because that will make all functions require this
const verifyAuth = async (req, res, next) => {
    const user = findUser('token', req.cookies[authCookieName]);
    if (user){
        next();
    }
    else {
        res.status(401).send({msg: 'Unauthorized'}) 
    }
}

apiRouter.get('/chats', verifyAuth, async (req, res) => {
    res.json(chats)
})

apiRouter.get('/get/sent', verifyAuth, async (req, res) => {
    const user = findUser('token', req.cookies[authCookieName]);
    let number = user.sent
    res.json({sent: number})
})

apiRouter.post('/send', verifyAuth, async (req, res) => {
    const user = findUser('token', req.cookies[authCookieName]);
    user.sent += 1
    updateChats(req.body, res)
})


app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

//checks our users array and returns the user that matches the field and value (if login or create is searches by email)
function findUser(field, value){
    if (!value) return null;

    return users.find((u) => u[field] === value)
}


//creates a new user with a hashed password and a uuid generated token. Appends that to the users array and return user JSON object 
async function createUser(email, password){
    const newPassword = await bcrypt.hash(password, 10);

    const user = {
        "email" : email,
        "password" : newPassword,
        'token' : uuid.v4(),
        "sent" : 0
    };
    users.push(user)
    return user
}

//will make the response of a request contain a cookie with a certain name and token, with specific parameters
function setAuthCookie(res, token){
    res.cookie(authCookieName, token, {
        maxAge: 1000 * 60 * 60 * 24 * 365,  //lasts 1 year
        secure: true,  //only through https
        httpOnly: true,
        sameSite: 'strict',  //only can be retrieved from requests on this website
    }
    )
}

async function updateChats(chat, res){
    if (chat) {
        if (chats.length >= 10){
            const trimmed = chats.slice(0, 9);
            chats = [chat, ...trimmed];
            res.status(200).send({msg:"Yay it worked"})
        }
        else{
            chats = [chat, ...chats];
            res.status(200).send({msg:"Yay it worked"})
        }
    }
    else{
        res.status(404).send({msg: "Nothing to send"});
    }
}


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});