import { Router } from 'express';
import { 
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser 
} from '../controllers/users.controller';
import validate from '../middlewares/validate.middleware';
import { check } from 'express-validator';

const router = Router();

router.get('/', getUsers);
router.get('/:id', validate([
    check('id', 'ID is not a valid value').isInt()
]), getUser);
router.post('/', validate([
    check('firstName', 'Firstname is required').not().isEmpty(),
    check('firstName', 'Firstname has more than 255 characters').isLength({ max: 255 }),
    check('lastName', 'Lastname is required').not().isEmpty(),
    check('lastName', 'Lastname has more than 255 characters').isLength({ max: 255 }),
    check('age', 'Age is not a number').isInt()
]), postUser);
router.put('/:id', validate([
    check('id', 'ID is not a valid value').isInt(),
    check('firstName', 'Firstname is required').not().isEmpty(),
    check('firstName', 'Firstname has more than 255 characters').isLength({ max: 255 }),
    check('lastName', 'Lastname is required').not().isEmpty(),
    check('lastName', 'Lastname has more than 255 characters').isLength({ max: 255 }),
    check('age', 'Age is not a number').isInt()
]), putUser);
router.delete('/:id', validate([
    check('id', 'ID is not a valid value').isInt()
]), deleteUser);

export default router;