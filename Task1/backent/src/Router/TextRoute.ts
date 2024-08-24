import { createMsg, deleteText, getText } from '../Controller/TextController'
import express from 'express'

const app = express.Router()

app.post('/createMsg',createMsg )
app.get('/getMsg',getText )
app.post('/deleteText',deleteText )

export default app