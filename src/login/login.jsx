import React from 'react';
import { AuthState } from './authState';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';

export function Login({userName, authState, onAuthChange}) {
  return (
    <main className="container-fluid">
        <div>
            {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => {onAuthChange(userName, AuthState.Unauthenticated)}}/>
            )}
            {authState === AuthState.Unauthenticated &&(
                <Unauthenticated userName={userName} onLogin={(loginUsername) => {onAuthChange({userName}, AuthState.Authenticated)}}/>
            )}
        </div>
    </main>
  );
}