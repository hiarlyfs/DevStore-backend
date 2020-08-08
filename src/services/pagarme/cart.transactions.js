const pagarme = require('pagarme')

async function createTransaction({
  amountInCents,
  cardNumber,
  cardHolderName,
  cardExpirationDate,
  cardCvv,
  installments,
  items
}) {
  try {
    const client = await pagarme.client.connect({
      api_key: 'ak_test_Dzg2zN20noHTLIVtS23kCumpkBFn8L'
    })
    const orderItems = items.map((item) => {
      return {
        id: item.id,
        title: item.product,
        quantity: item.quantity,
        unit_price: item.unitPrice,
        tangible: false
      }
    })
    const transaction = await client.transactions.create({
      amount: amountInCents,
      card_number: cardNumber,
      card_holder_name: cardHolderName,
      card_expiration_date: cardExpirationDate,
      card_cvv: cardCvv,
      installments,
      items: orderItems
    })
    return transaction
  } catch (err) {
    console.log(err.response)
    throw err.response
  }
}

module.exports = { createTransaction }
