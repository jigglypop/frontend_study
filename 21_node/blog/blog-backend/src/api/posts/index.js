const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');
const router = new Router();

router.get('/',postsCtrl.list);
router.post('/',postsCtrl.write);
router.get('/:id',postsCtrl.read);
router.delete('/:id',postsCtrl.remove);
router.put('/:id',postsCtrl.replace);
router.patch('/:id',postsCtrl.update);

module.exports = router