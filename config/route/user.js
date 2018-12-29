import {Router} from 'express';


const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendCode('0000');
});


module.exports = router;