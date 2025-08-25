//Crypto nos permite trabajar con funciones criptograficas, como la creacion de hashes para contraseñas o datos sensibles.


//Ejemplo uso de crypto para crear un hash
const crypto =require('crypto');

const text = 'hello crypto world';
const hash = crypto.createHash('sha256').update(text).digest('hex');

console.log('Texto Original:', text);
console.log('Hash SHA-256:', hash)