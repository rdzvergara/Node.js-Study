const connection = require('../database/connection');

module.exports= {
    async login(request,response){
       const {username,senha} = request.body;
       const char= await connection("char")
       .where('senha',senha)
       .select('name')
       .first();

       if(!char){
           return response.status(400).json({error: "Wrong Username or Password"});
       }

    }


};

