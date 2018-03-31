const router = require('koa-router')()

router.prefix('/users/v1.0')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
// /users/login
router.post('/login', function (ctx, next) {
  console.log(ctx)
})
module.exports = router
