import {Router} from 'express';


const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Hello User Api World!');
});


module.exports = router;