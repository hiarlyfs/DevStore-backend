require('dotenv').config({ path: '.env' })
const pagarme = require('pagarme')

async function getClient() {
  try {
    const client = await pagarme.client.connect({
      api_key: process.env.PAGARME_API_KEY
    })
    return client
  } catch (err) {
    throw err.response
  }
}

module.exports = { getClient }
