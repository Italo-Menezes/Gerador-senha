let express = require('express')
const index = require('../controllers/indexController')
let router = express.Router()


const indexController = require('../controllers/indexController')

router.get('/' , indexController.index)

module.exports = router;