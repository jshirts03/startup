import React from 'react';

export function Login() {
  return (
    <main className="container-fluid">
        <div id="login_blank">
            <p></p>
        </div>
        <div id="login">
        <form method="get" action="chat.html">
                <div id="login_here">
                    <h2>Login Here</h2>
                </div>
                <div id="username">
                    <spa id="email_label">Email</spa><input type="text" placeholder="your email here" />
                </div>
                <div id="password">
                    <spa>Password</spa> <input type="text" placeholder="your password here" />
                </div>
                <div id="buttons">
                    <button type="submit">Login</button>
                    <button type="submit">Create</button>
                </div>
        </form>
        </div>
        <div id="login_blank">
            <p></p>
        </div>
    </main>
  );
}