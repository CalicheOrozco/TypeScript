"use strict";
// Number Explicit
let phone;
// phone = '+367128815'; --> Error de tipo
phone = 924234669;
// Number inferred
let phoneMovil = 2281281190;
// let phoneMovil = true; --> Error esta definido antes
let hex = 0xf00d;
let binary = 0b101;
let octal = 0o744;
// Type: Boolean
let isPro;
isPro = true;
// isPro = 1; --> Error
// String
let username = 'CalicheOrozco';
username = 'Caliche';
// username = true; --> Error
// Template String with use of back-tick ``
let userInfo;
userInfo = `
    User info:
    username: ${username}
    firtsname: ${username + ' Orozco'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
