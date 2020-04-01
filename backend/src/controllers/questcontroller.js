const connection= require('../database/connection');

module.exports ={
    async index(request,response){
        const { page= 1} = request.query;
        const [count]= await connection('quest').count();
        const quest = await connection('quest')
        .join('char','char.id','=','quest.char_id')
        .limit(5)
        .offset((page-1)*5)
        .select(['quest.*','char.name','char.classe']);
        response.header('Total-de-Quests',count['count(*)']);
        return response.json(quest);
    },
     async create(request,response){
      const { titulo,level,local,desc,game }  = request.body;
      const char_id = request.headers.authorization;
      const [id] = await connection('quest').insert({
        titulo,
        level,
        local,
        desc,
        game,
        char_id
      });
      return response.json({id});
    },

    async delete(request,response){
        const {id } = request.params;
        const char_id = request.headers.authorization;

        const quest = await connection('quest') 
         .where('id',id)    
         .select('char_id')
         .first();

         if (quest.char_id != char_id){
             return response.status(401).json({error: 'Operation not permitted. '});
         }

         await connection('quest').where('id',id).delete();

         return response.status(204).send();

    }
};