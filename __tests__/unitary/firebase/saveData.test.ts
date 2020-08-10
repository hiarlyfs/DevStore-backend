import { saveDataInFirebase } from '../../../src/services/firebase/firebaseUtils'
import faker from 'faker'

describe('Save data in firebase', () => {
  it('Should be possible save data in firebsae', async () => {
    const response = await saveDataInFirebase('/test', {
      data: new Date(),
      name: faker.name.findName()
    })

    return response
  })
})
