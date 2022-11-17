import express, {type Express} from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app: Express = express()

app.disable('x-powered-by')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

app.get('/', (_, res) => {
  res.send('Hello World!')
})

export function start(port: number) {
  return app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
}
