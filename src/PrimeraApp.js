import React from 'react';
import PropTypes from 'prop-types'  ;

// subtitulo: parametro por defecto
const PrimeraApp = ({saludo,subtitulo})=>{
    
    return (
        
        <>
        <h1>{saludo}</h1>
        <p>{subtitulo}</p>
        </>
    );
    
}
// defino el tipo de la propiedad, con un string y que sea obligatorio

PrimeraApp.prototype = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Este es un subtitulo'
}



export default PrimeraApp;
