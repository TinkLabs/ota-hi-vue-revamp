import {Router} from 'express';


const router = Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    res.sendCode('0000');
  } catch (e) {
    next(e);
  }
});


module.exports = router;