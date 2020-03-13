import Router from 'express'
import {
  getTimelines
} from './get'

const Routes = Router()

Routes
  .get('/', getTimelines)

export const module = {
  name: 'timeline',
  route: Routes
}
