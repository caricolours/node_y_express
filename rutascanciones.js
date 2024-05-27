import {Router} from 'express'
import { getHtml, getCanciones, postCanciones, deleteCanciones, putCanciones } from './canciones.js'

const router = Router()


router.get('/', getHtml)
router.get('/songs', getCanciones)
router.post('/songs', postCanciones)
router.delete('/songs/:id', deleteCanciones)
router.put('/songs/:id', putCanciones)


export default router;