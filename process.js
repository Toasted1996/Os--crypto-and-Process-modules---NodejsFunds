//Process nos permite acceder a informacion sobre los procesos en ejecución

console.log('ID Proceso(PID):', process.pid);
console.log('Directorio Actual:', process.cwd());
console.log('Version de Node.js:',process.version);
console.log('Plataforma:', process.platform);
console.log('Uso de memoria:', process.memoryUsage());
console.log('Arquitectura:', process.arch);
console.log('Tiempo de ejecucion', process.uptime(), 'segundos');


//Process.env permite acceder a las variables del entorno

console.log(process.env);
console.log('path:',process.env.PATH);
console.log('home:', process.env.HOME || process.env.USERPROFILE);
console.log('NODE_ENV:', process.env.NODE_ENV || 'No definido');

//Vista de memoryUsage sin formato de MB
const memoryUsage =  process.memoryUsage();
console.log(('Uso de memoria: ', memoryUsage));


//Vista de memoryUsage con formato de MB, se divide el resultado obtenido por 1024 dos veces y luego se multiplica por 100 y luego se divide en 100
const formatMemoryUsage = (data) => {
  return `${Math.round(data / 1024 / 1024 * 100) / 100} MB`;
}

console.log('Uso de memoria:');
const memoryData = process.memoryUsage();

console.log(`rss: ${formatMemoryUsage(memoryData.rss)}`);
console.log(`heapTotal: ${formatMemoryUsage(memoryData.heapTotal)}`);
console.log(`heapUsed: ${formatMemoryUsage(memoryData.heapUsed)}`);
console.log(`external: ${formatMemoryUsage(memoryData.external)}`);

//Process.on

process.on('exit', code =>{
    console.log('Proceso terminado', code)
})


process.on('SIGINT', () => {
    console.log('Se recibio la señal de interrupcion (Crtl+C)')
    process.exit(0)
});

console.log('Escribe algo y presiona enter o Crtl+C para salir');

process.stdin.on('data', data =>{
    const input = data.toString().trim();
    if (input.toLowerCase() === 'exit'){
        console.log('Comando de salida recibido')
        process.exit(0);
    }else{
        console.log('Escribiste: ', input);
        console.log('Escribe "exit" para salir o algo que quieras decir')
    }
});