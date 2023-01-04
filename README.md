# win-protect
Node Addon for CryptProtectData/CryptUnprotectData of Win32 API to encrypt/decrypt data

"Typically, only a user with the same logon credential as the user who encrypted the data can decrypt the data. In addition, the encryption and decryption usually must be done on the same computer"
[CryptProtectData Win32 documentation](https://learn.microsoft.com/en-us/windows/win32/api/dpapi/nf-dpapi-cryptprotectdata)

By combining an additional password this could be a powerfull tool to store passwords, api keys or any secret securly

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/hmenyus)

## Installation
```
npm install win-protect
```

## Examples

### Encrypting data
```javascript
const wp = require("win-protect");

const input = Buffer.from("secret");

const encrypted = wp.encrypt(input);

const decrypted = wp.decrypt(encrypted);
```

### Encrypting data with additional password
```javascript
const wp = require("win-protect");

const password = Buffer.from("password123");

const input = Buffer.from("secret");

const encrypted = wp.encrypt(input, password);

const decrypted = wp.decrypt(encrypted, password);
```
