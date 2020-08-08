const pagarme = require('pagarme')

async function getClient() {
  try {
    const client = await pagarme.client.connect({
      api_key: 'ak_test_Dzg2zN20noHTLIVtS23kCumpkBFn8L'
    })
    return client
  } catch (err) {
    throw err.response
  }
}

module.exports = { getClient }
