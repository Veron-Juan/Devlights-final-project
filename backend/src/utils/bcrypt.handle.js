import pkg from 'bcryptjs';
const {hash, compare} = pkg;

// funciones que se encarga de manejar todo lo encriptado


const encrypt = async (pass)=> {
    //hash es para encriptar, 1er argumento es un string (password) y el segundo un dato para generar aletoriedad
    const passwordHash = await hash(pass, 8)
    return passwordHash

}

const verified = async (pass, passHash)=> {
    // compara el texto plano con su respectiva encriptacion
    //pass es el texto del lado del cliente y passHash la contraseña encriptada guardada en la bd
    const isCorrect = await compare(pass, passHash);
    return isCorrect // devuelve un booleano
}

export {encrypt, verified}
