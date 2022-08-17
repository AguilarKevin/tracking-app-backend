import {app} from '../../server.js'
import {allUsers} from './User.controller.js'

app.get('/users', allUsers)
