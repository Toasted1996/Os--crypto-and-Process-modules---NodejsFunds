const os = require('os');

function showSystemInfo() {
    console.log(`Sistema Operativo: ${os.type()}`);
    console.log(`Plataforma: ${os.platform()}`);
    console.log(`Arquitectura: ${os.arch()}`);
    console.log(`CPU: ${os.cpus().length} núcleos`);
    console.log(`Hostname: ${os.hostname()}`);
    console.log(`Memoria Total: ${os.totalmem()} bytes`);
    console.log(`Memoria Libre: ${os.freemem()} bytes`);
}

showSystemInfo();