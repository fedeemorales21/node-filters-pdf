const { Router } = require('express')
const router = Router()

// import cosntroller
const { renderIndex, renderAdd, saveNewProduct, filteredResults } = require('../controllers/indexController')

router.get('/', renderIndex)
router.post('/filters', filteredResults)
router.get('/add', renderAdd)
router.post('/add', saveNewProduct)

module.exports = router