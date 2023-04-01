const Router = require('express')
const bodyParser = require('body-parser')



const router = new Router()
const conroller = require("../controllers/StorageController")
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/registerStorage',urlencodedParser,conroller.addStorage)
router.get('/getAllStorage',conroller.getAllStorage)
router.put('/update',conroller.updateStorage)
router.delete('/delete/:id',conroller.deleteStorage)
router.get('/search/:param/:value', conroller.findStorage);

module.exports = router