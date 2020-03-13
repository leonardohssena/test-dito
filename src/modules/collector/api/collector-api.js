import CollectorSchema from '../models/schema'

const saveCollector = async (data) => {
  await CollectorSchema(data).save()
}

const findCollectorSearch = async ({ event }) => {
  const filter = {
    'event': { '$regex': event, '$options': 'i' }
  }
  const collectors = await CollectorSchema.find(filter).limit(4)

  return collectors
}

export { saveCollector, findCollectorSearch }
