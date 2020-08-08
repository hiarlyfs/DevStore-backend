import { getClient } from './client'
import { IItemOrder } from '../../types/Order'

export async function generateCardTransaction({
  amountInCents,
  cardNumber,
  cardHolderName,
  cardExpirationDate,
  cardCvv,
  installments,
  items
}: any) {
  try {
    const client = await getClient()
    const orderItems = items.map((item: IItemOrder) => {
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
    throw err.response
  }
}

export async function generateBankSlipTransaction(data: any) {
  try {
    const client = await getClient()
    const transaction = await client.transactions.create({
      amount: 1000,
      payment_method: 'boleto',
      postback_url: 'http://requestb.in/pkt7pgpk',
      customer: {
        type: 'individual',
        country: 'br',
        name: 'Aardvark Silva',
        documents: [
          {
            type: 'cpf',
            number: '00000000000'
          }
        ]
      }
    })
    return transaction
  } catch (err) {
    throw err.response
  }
}
