const connection = require('../database/connection');

module.exports= {
    async index(request,response){
      const char_id= request.headers.authorization;

      const quest= await connection('quest')
      .where('char_id',char_id)
      .select('*')

      return response.json(quest);
    },
  
   async search(request,response){
    const { Game }   = request.body;
    const quest= await connection('quest')
    .where('game',Game)
    .select('*')

     return response.json(quest);
   }

}; 