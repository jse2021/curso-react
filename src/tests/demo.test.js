describe('Pruebas en el archivo demo.test.js',()=>{
    test('Deben ser iguales los string', () => { 
        //1.incializacion
        const mensaje = "Hola Mundo";
        //2.estimulo
        const mensaje2 = "Hola Mundo!ss";
    
        //3.Observar comportamiento
        expect(mensaje).toBe(mensaje2);
        
    })
});

