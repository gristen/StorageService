// Склада МП
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storageMPShema = new Schema ({
    // название маркетплейса
    nameMP: {
        type: String,
        require: true,
        enum: ['Wildberries','OZON','Яндекс Маркет']
    },
    // Регион
    regionStorageMP: {
        type: String,
        require: true,
        max: 50,
        min: 2
    },
    // Город
    towerStorageMP: {
        type: String,
        require: true,
        max: 50,
        min: 2
    },
    // Индекс
    indexStorageMP: {
        type: Number,
        require: true,
        max: 5,
        min: 1
    },
    // Адрес
    adressStorageMP: {
        type: String,
        require: true,
        max: 150,
        min: 5
    },
    // Номер телефона
    numberStorageMP: {
        type: String,
        require: true,
        max: 20
    }
})

module.exports = mongoose.model('storageMP',storageMPShema)