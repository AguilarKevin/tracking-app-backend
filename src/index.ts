import 'dotenv/config'

import {start} from './server.js'

start(Number(process.env.PORT) || 3000)
