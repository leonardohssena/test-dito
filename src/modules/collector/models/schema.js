import { model, Schema } from 'mongoose'
import MODEL from './model'

const name = 'collector'

const schema = new Schema(MODEL, {
  timestamps: true
})

const SCHEMA = model(name, schema)

export default SCHEMA
