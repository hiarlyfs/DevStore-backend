import { getClient } from './pagarmeConfig'
import { IItemOrder } from '../../types/Order'

export async function generateCardTransaction({
  amount,
  cardNumber,
  cardHolderName,
  cardExpirationDate,
  cardCvv,
  installments,
  items,
  clientId
}: any) {
  try {
    const client = await getClient()
    const orderItems = serializeItems(items)
    const transaction = await client.transactions.create({
      amount,
      card_number: cardNumber,
      card_holder_name: cardHolderName,
      card_expiration_date: cardExpirationDate,
      card_cvv: cardCvv,
      installments,
      items: orderItems
    })

    return transaction
  } catch (err) {
    throw err.response
  }
}

export async function generateBankSlipTransaction({
  amount,
  items,
  clientId,
  customer: { name, cpf, country, email }
}: any) {
  try {
    const client = await getClient()
    const orderItems = serializeItems(items)
    const transaction = await client.transactions.create({
      amount,
      payment_method: 'boleto',
      postback_url: 'http://requestb.in/pkt7pgpk',
      items: orderItems,
      customer: {
        external_id: clientId,
        type: 'individual',
        country,
        name,
        email,
        documents: [
          {
            type: 'cpf',
            number: cpf
          }
        ]
      }
    })
    return transaction
  } catch (err) {
    throw err.response
  }
}

function serializeItems(items: IItemOrder[]) {
  return items.map((item) => {
    return {
      id: item.id,
      title: item.product,
      quantity: item.quantity,
      unit_price: item.unitPrice,
      tangible: false
    }
  })
}
