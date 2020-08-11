import { getClient } from './pagarmeConfig'

export async function simulateBankSlipPayment(
  transactionId: string
): Promise<any> {
  try {
    const client = await getClient()
    const transaction = await client.transactions.update({
      id: transactionId,
      status: 'paid'
    })
    return transaction
  } catch (error) {
    throw new Error(error.response)
  }
}
