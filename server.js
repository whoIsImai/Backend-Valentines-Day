import express, { json } from 'express'
import cors from 'cors'
import 'dotenv/config';
import router from './routes/router.js'

const app = express()

//middlewares
app.use(cors())
app.use(json())
app.use('/api',router)
app.listen(process.env.PORT, ()=> console.log(`server active at http://localhost:${process.env.PORT || 1000}`))