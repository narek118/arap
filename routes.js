import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
	res.redirect('/html/index.html');
})

// router.get('/user', (req, res, next) => {
// 	res.render('user.pug', { user : true });
// })

// router.post('/login', (req, res, next) => {
// 	res.redirect('/user');
// })

export default router;
