"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipoDato> // angle Backet syxntax
let username;
username = 'CalicheOrozco';
// tenemos una cadena, TS confia en mi!
let message = username.length > 5
    ? `Welcome ${username}`
    : `Username is too short`;
console.log('message', message);
let usernameWithId = 'CalicheOrozco 1';
// Como obtener el username ?
username = usernameWithId.substring(0, 10);
console.log('Username only', username);
// Sintaxis = 'as'
message =
    username.length > 5
        ? `Welcome ${username}`
        : `Username is too short`;
let helloUser;
helloUser = 'hello Caliche';
username = helloUser.substring(6);
console.log('username', username);
