const StorageModel = require('../models/StorageModel.js')


class StatusServices
{
    async addStorage(req)
    {
       const storage = new StorageModel(req.body)
       await storage.save()
        const message = "Склад успешно создан"
        const result =
            {
                message,
                client
            }
       return (result)

    }

    async getAllStorage()
    {
         const storage= await StorageModel.find()
        const message = "Список всех складов"
        const result =
            {
                message,
                storage
            }
        return (result)
    }
    async deleteStorage(req)
    {
        await StorageModel.deleteOne(req.body)
        return ("Склад успешно удален.")
    }
    async updateStorage (req)
    {
         await StorageModel.findByIdAndUpdate(req.body._id,req.body,{new:true}) // ищем по ид и обновляем данные
        return ("Склад успешно обновлен.")
    }
   async findStorageByParam(query)
   {
       return (await StorageModel.find(query))
   }


   
}

module.exports = new StatusServices()