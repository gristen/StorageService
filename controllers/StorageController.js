const { json } = require('body-parser')
const StorageModel = require('../models/StorageModel.js')
const StorageServices = require('../Services/StorageServices.js')


class ControllerStorage{

    async addStorage(req,res)
    {
        try {
            return res.json( await StorageServices.addStorage(req))
        }catch (e){
            console.log(e)
        }


    }
    async findStorage(req,res)
    {
        try {
            const param = req.params.param;
            const value = req.params.value;
            const query = {};
            query[param] = value;
            return res.json(await StorageServices.findStorageByParam(query))
        }catch (e){
            console.log(e)
        }


    }

    async getAllStorage(req,res)
    {
        try {
            return res.json(  await StorageServices.getAllStorage())
        }catch (e){
            console.log(e)
        }


    }

    async deleteStorage(req,res)
    {
        try {
            return res.json(await StorageServices.deleteStorage(req))
        }catch (e){
            console.log(e)
        }

    }

    async updateStorage (req,res)
    {
        try {
            await StorageServices.updateStorage(req)
            return res.json( "Склад отредактирован" )
        }catch (e){
            console.log(e)
        }
    }
    
    
}

module.exports = new ControllerStorage()
