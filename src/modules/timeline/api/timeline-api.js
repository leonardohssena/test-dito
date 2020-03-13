/* eslint-disable camelcase */
import _ from 'lodash'
import { getAllTimelinesApi } from '../../../helpers/services'
import { convertArrayToObject } from '../../../helpers/utils'

const findTimelines = async () => {
  const apiTimelines = await getAllTimelinesApi()

  const timelines = groupEvents(apiTimelines)

  return _.orderBy(timelines, ['timestamp'], ['desc'])
}

const castEventToTimeline = ({ revenue, timestamp, custom_data }) => {
  const { transaction_id, product_name, product_price, store_name } = convertArrayToObject(custom_data, 'key', 'value')

  return {
    timestamp: new Date(timestamp),
    revenue: revenue ? Number(revenue) : undefined,
    transaction_id,
    store_name,
    products: [],
    product:
      product_name ? {
        name: product_name,
        price: Number(product_price)
      } : undefined
  }
}

const groupEvents = (apiTimelines) => apiTimelines.events.reduce((acc, event) => {
  const { product, ...timeline } = _.pickBy(castEventToTimeline(event))
  const index = acc.findIndex(({ transaction_id }) => transaction_id === timeline.transaction_id)

  const curr = index >= 0 ? { ...timeline, ...acc[index] } : timeline
  curr.products = product ? [ ...curr.products, product ] : curr.products

  index >= 0 ? acc[index] = curr : acc = [ ...acc, curr ]
  return acc
}, [])

export { findTimelines }
