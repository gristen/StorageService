const StorageModel = require('../models/StorageModel.js')


class StatusServices
{
    //добавление нового склада
    async addStorage(req)
    {
       const storage = new StorageModel(req.body)
       await storage.save()
        const message = "Склад успешно создан" //сообщение об успехе
        const result =
            {
                message,
                client
            }
       return (result) //отправляем объект

    }
//получаем все склады
    async getAllStorage()
    {
         const storage= await StorageModel.find()
        const message = "Список всех складов"
        const result =
            {
                message,
                storage
            }
        return (result)//отправляем объект
    }
    //удаляем 
    async deleteStorage(req)
    {
        await StorageModel.deleteOne(req.body)
        return ("Склад успешно удален.")
    }
    //обновляем
    async updateStorage (req)
    {
         await StorageModel.findByIdAndUpdate(req.body._id,req.body,{new:true}) // ищем по ид и обновляем данные
        return ("Склад успешно обновлен.")
    }
    //ищем по параметрам
   async findStorageByParam(query)
   {
       return (await StorageModel.find(query))
   }


   
}

module.exports = new StatusServices()
