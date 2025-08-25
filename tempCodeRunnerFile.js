process.on('exit', code =>{
    console.log('Proceso terminado', code)
})


process.on('SIGINT', () => {
    console.log('Se recibio la señal de interrupcion (Crtl+C)')
    process.exit(0)
});

console.log('Escribe algo y presiona enter o Crtl+C para salir');

process.stdin.on('data', ()=>{
    const input = data.toString().trim();
    if (input.toLowerCase() === 'exit'){
        console.log('Comando de salida recibido')
        process.exit(0);
    }else{
        console.log('Escribiste: ', input);
        console.log('Escribe "exit" para salir o algo que quieras decir')
    }
});