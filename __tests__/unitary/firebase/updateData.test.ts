import { updateData } from '../../../src/services/firebase/firebaseUtils'

describe('Update data in firebase', () => {
  it('Should update a field in the firebase document', async () => {
    const response = await updateData(
      '/clients/123/transactions/-METNJ0udLutC1TLfqGk',
      { status: 'finish' }
    )

    return response
  })
})
