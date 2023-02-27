import express from 'express';
const router = express.Router();
import  {register, login, getMe} from '../controllers/UserController.js';
import Protect from '../middleware/auth.js';

//register  
router.post('/register',register);
//login 
router.post('/login',login);
// change password
router.get('/me',Protect,getMe);



export default router