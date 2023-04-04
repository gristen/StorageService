
const StorageServices = require('../Services/StorageServices.js')


class ControllerStorage{

    async addStorage(req,res)
    {
        try {
            return res.json(await StorageServices.addStorage(req.body))
        }catch (error){
          res.status(400).json(error)
        }
    }
    async findStorage(req,res)
    {
        try {
            const query = {};
            query[req.params.param] = req.params.value;

           return res.json(await StorageServices.findStorageByParam(query))
        }catch (e){
            console.log(e)
        }



    }

    async getAllStorage(req,res)
    {
        try {
          return res.json( await StorageServices.getAllStorage())

        }catch (e){
            console.log(e)
        }


    }

    async deleteStorage(req,res)
    {
        try {
            return res.json(await StorageServices.deleteStorage(req.body))
        }catch (e){
            console.log(e)
        }

    }

    async updateStorage (req,res)
    {
        try {
        return res.json( await StorageServices.updateStorage(req.body))
        }catch (e){
            console.log(e)
        }
    }

}

module.exports = new ControllerStorage()
