// 1. o TS tem import/export porem o Node ñ entende
// 2. precisa baixar tipagens de certas bibliotecas Ex: @types/express
// 3. Babel, sucrase, ts-node-dev(nodemon for Node)

import express from 'express'
import cors from 'cors'

import routes from './routes'

const app = express()

app.use(routes)
app.use(cors)

app.listen(3333)