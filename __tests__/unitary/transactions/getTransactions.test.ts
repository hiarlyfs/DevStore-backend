import OnlineDatabase from '../../../src/databaseManager/onlineDatabase'

const onlineDatabase = new OnlineDatabase()

describe('Get transactions', () => {
  it('Should get all transactions from a specific client', async () => {
    const response = await onlineDatabase.getAllTransactionsFromClient('123')
    return expect(response).toBeTruthy()
  })
})
