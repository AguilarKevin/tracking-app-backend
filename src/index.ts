import 'dotenv/config'

import {start} from './server.js'

start(+process.env.PORT || 3000)
