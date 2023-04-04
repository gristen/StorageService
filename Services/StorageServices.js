const StorageModel = require('../models/StorageModel.js')


class StatusServices
{
    async addStorage(dataStorage)
    {
       const newStorage = new StorageModel(dataStorage)
         await newStorage.save()
        const message = "Склад успешно создан"
        const response = { message,newStorage }

       return (response)

    }

    async getAllStorage()
    {
        const storage = await StorageModel.find()
        const message = "Список всех складов"
        const result ={ message, storage}

        return (result)
    }
    async deleteStorage(dataStorage)
    {
       const deleteStorage = await StorageModel.deleteOne(dataStorage)
        if (!deleteStorage) return { error:"При удалении возникла ошибка . Склад с таким ID не найден" }

        return ({ message:'Склад успешно удален'})
    }
    async updateStorage (dataStorage)
    {
       const updateStorage = await StorageModel.findByIdAndUpdate(dataStorage._id,dataStorage,{new:true})
        if (!updateStorage) return { error:"Склад с таким ID не найден" }

        return { message:'Склад успешно обновлен', storage : updateStorage }
    }
   async findStorageByParam(query)
   {
       const storage = await StorageModel.find(query)
      if (!storage) return {error:"Склад не найден"}

       return (storage)

   }


   
}

module.exports = new StatusServices()