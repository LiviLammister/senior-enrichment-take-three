const router = require('express').Router()
module.exports = router

router.use('/campus',   require('./campus'))
router.use('/students', require('./students'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
