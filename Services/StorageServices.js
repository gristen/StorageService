const StorageModel = require('../models/StorageModel.js')


class StatusServices
{
    async addStorage(dataStorage)
    {
       const newStorage = new StorageModel(dataStorage)
         await newStorage.save()

       return {message:"Склад успешно создан",newStorage:newStorage}

    }

    async getAllStorage()
    {
        const storage = await StorageModel.find()

        if (!storage) return {message: "Ничего не найдено"}

        return {message:"Список складов",storage:storage}
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

       return {storage: storage}

   }


   
}

module.exports = new StatusServices()