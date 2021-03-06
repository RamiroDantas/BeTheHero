const connection = require('../database/connection');

module.exports= {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            return responde.data(400).json({ error: 'Não foi encontrado nenhuma ong'});
        }

        return response.json(ong);
    }
}