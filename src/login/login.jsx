import React from 'react';
import { AuthState } from './authState';

export function Login({userName, authState, onAuthChange}) {
  return (
    <main className="container-fluid">
        <div>
            {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => {onAuthChange({userName}, AuthState.Unauthenticated)}}/>
            )}
            {authState === AuthState.Unauthenticated &&(
                <Unauthenticated userName={userName} onLogin={() => {onAuthChange({userName}, AuthState.Authenticated)}}/>
            )}
        </div>
    </main>
  );
}