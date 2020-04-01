const connection= require('../database/connection')  ;
const crypto = require('crypto');

module.exports = {
    async index(request, response)  {
        const char = await connection('char').select('*');
        return response.json(char);
    },

    async create(request, response){
        const { username,senha,name,email,classe,whatsapp }  = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('char').insert({
        id,
        username,
        senha,
        name,
        email,
        classe,
        whatsapp,
    })

    return response.json({id});
    }
};