import Router from 'express'
import {
  getCollectorSearch
} from './get'
import {
  postCollector
} from './post'

const Routes = Router()

Routes
  .get('/search', getCollectorSearch)
  .post('/', postCollector)

export const module = {
  name: 'collector',
  route: Routes
}
